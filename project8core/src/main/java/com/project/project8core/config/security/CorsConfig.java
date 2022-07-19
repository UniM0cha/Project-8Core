package com.project.project8core.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

  @Bean
  CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true); // 내 서버가 응답할 때 json을 자바스크립트에서 처리할 수 있게 할지를 설정하는 것.
    config.addAllowedOrigin("*"); // 모든 ip의 응답을 허용하겠다.
    config.addAllowedHeader("*"); // 모든 header의 응답을 허용하겠다.
    config.addAllowedMethod("*"); // 모든 post, get, put, delete 등을 허용하겠다.
    source.registerCorsConfiguration("/api/**", config);
    return new CorsFilter(source);
  }
}
