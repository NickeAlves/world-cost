package com.world_cost.controller;

import com.world_cost.dto.request.MovingRequestDTO;
import com.world_cost.dto.request.TourismRequestDTO;
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

    @PostMapping("/moving")
    public GeminiResponseDTO generateResponse(@RequestBody MovingRequestDTO placeToMoving) {
        return geminiService.processMovingPrompt(placeToMoving);
    }

    @PostMapping("/tourism")public GeminiResponseDTO generateResponse(@RequestBody TourismRequestDTO placeToTourism) {
        return geminiService.processTourismPrompt(placeToTourism);
    }
}
