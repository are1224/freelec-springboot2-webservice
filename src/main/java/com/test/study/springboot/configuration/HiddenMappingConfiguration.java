package com.test.study.springboot.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.HiddenHttpMethodFilter;

@Configuration
public class HiddenMappingConfiguration {

    //요놈을 추가해 줘야만 정상적으로 PutMapping이나 DeleteMapping을 쓸 수 있다.
    @Bean
    public HiddenHttpMethodFilter hiddenHttpMethodFilter() {
        return new HiddenHttpMethodFilter();
    }
}

