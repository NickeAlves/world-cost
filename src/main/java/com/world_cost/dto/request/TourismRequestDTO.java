package com.world_cost.dto.request;

import jakarta.validation.constraints.NotBlank;

public record TourismRequestDTO(@NotBlank String placeToTourism) {
}
