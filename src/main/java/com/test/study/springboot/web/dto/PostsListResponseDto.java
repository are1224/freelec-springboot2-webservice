package com.test.study.springboot.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.test.study.springboot.domain.Posts;
import lombok.Getter;
import java.time.LocalDateTime;

@Getter
public class PostsListResponseDto {
    private Long id;
    private String title;
    private String author;
    private LocalDateTime modifiedDate;

    public PostsListResponseDto(Posts entity){
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.author = entity.getAuthor();
        this.modifiedDate = entity.getModifiedDate();
    }
}
