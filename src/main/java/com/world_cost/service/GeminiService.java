package com.world_cost.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.world_cost.dto.request.MovingRequestDTO;
import com.world_cost.dto.request.TourismRequestDTO;
import com.world_cost.dto.response.GeminiResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
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

    private static final String GEMINI_API_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=";

    private final RestTemplate restTemplate;
    private final ObjectMapper mapper;

    @Autowired
    public GeminiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.mapper = new ObjectMapper();
    }

    public GeminiResponseDTO processMovingPrompt(MovingRequestDTO placeToMoving) {
        try {
            String prompt = String.format(
                    "Please tell me the cost of living to move, including expenses for housing, food, transportation, groceries, neighborhoods, documentation, and work to %s.",
                    placeToMoving.placeToMoving()
            );
            String responseGemini = callGemini(prompt);
            return new GeminiResponseDTO(responseGemini);
        } catch (Exception e) {
            return new GeminiResponseDTO("Error while generating Gemini response: " + e.getMessage());
        }
    }

    public GeminiResponseDTO processTourismPrompt(TourismRequestDTO placeToTourism) {
        try {
            String prompt = String.format(
                    "Please tell me the cost of traveling to %s, including expenses for accommodation, food, transportation, attractions, neighborhoods, documentation, and general tourist activities.",
                    placeToTourism.placeToTourism()
            );
            String responseGemini = callGemini(prompt);
            return new GeminiResponseDTO(responseGemini);
        } catch (Exception e) {
            return new GeminiResponseDTO("Error while generating Gemini response: " + e.getMessage());
        }
    }

    private String callGemini(String prompt) throws Exception {
        Map<String, Object> requestBody = new HashMap<>();
        Map<String, String> part = Map.of("text", prompt);
        Map<String, Object> content = Map.of("parts", List.of(part));
        requestBody.put("contents", List.of(content));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(
                GEMINI_API_URL + apiKey,
                HttpMethod.POST,
                entity,
                String.class
        );

        if (response.getStatusCode() == HttpStatus.OK) {
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode textNode = root.path("candidates").path(0).path("content").path("parts").path(0).path("text");
            return textNode.isMissingNode() ? "No response text found" : textNode.asText();
        }

        return "Unable to get response from Gemini API";
    }
}

