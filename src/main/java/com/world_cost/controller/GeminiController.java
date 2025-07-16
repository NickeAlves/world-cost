package com.world_cost.controller;

import com.world_cost.dto.request.UserPromptRequestDTO;
import com.world_cost.dto.response.GeminiResponseDTO;
import com.world_cost.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {
    @Autowired
    private GeminiService geminiService;

    @PostMapping("/generate-prompt")
    public GeminiResponseDTO generateResponse(@RequestBody UserPromptRequestDTO prompt) {
        return geminiService.processPrompt(prompt);
    }
}
