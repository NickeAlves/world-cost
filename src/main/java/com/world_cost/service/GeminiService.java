package com.world_cost.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.world_cost.dto.request.UserPromptRequestDTO;
import com.world_cost.dto.response.GeminiResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;

    private final String URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

    public GeminiResponseDTO processPrompt(UserPromptRequestDTO request) {
        try {
            String responseGemini = callGemini(request.prompt());
            return new GeminiResponseDTO(responseGemini);
        } catch (Exception e) {
            return new GeminiResponseDTO("Error while generate Gemini response: " + e.getMessage());
        }
    }

    private String callGemini(String prompt) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        Map<String, Object> requestBody = new HashMap<>();
        Map<String, String> parts = new HashMap<>();
        parts.put("text", prompt);

        requestBody.put("contents", List.of(Map.of("parts", List.of(parts))));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-goog-api-key", apiKey);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(URL, HttpMethod.POST, entity, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode candidates = root.path("candidates");

            if (candidates.isArray() && candidates.size() > 0) {
                return candidates.get(0).path("content").path("parts").get(0).path("text").asText();
            }
        }

        return "Unable to get response from Gemini API";
    }
}
