package com.rhysticbuddy.card_db.card;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

    List<Card> findCardsByName(String name);
    List<Card> findCardsByNameIsContaining(String name);
    //List<Card> findCardsByText(String text);
}
