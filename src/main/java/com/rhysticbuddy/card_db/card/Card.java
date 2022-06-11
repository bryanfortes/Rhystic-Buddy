package com.rhysticbuddy.card_db.card;

import lombok.*;

import javax.persistence.*;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cards")
public @Data class Card {

    @Id
    @SequenceGenerator(
            name = "card_sequence",
            sequenceName = "card_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "card_sequence"
    )
    private Long id;
    private String scryfallid;
    private String name;
    private String type;
    private String types;
    private String artist;
    private String keywords;
    private String subtypes;
    private String supertypes;
    private String text;

    public Card(String scryfallid, String name, String type, String types, String artist, String keywords, String subtypes, String supertypes, String text) {
        this.scryfallid = scryfallid;
        this.name = name;
        this.type = type;
        this.types = types;
        this.artist = artist;
        this.keywords = keywords;
        this.subtypes = subtypes;
        this.supertypes = supertypes;
        this.text = text;
    }

}
