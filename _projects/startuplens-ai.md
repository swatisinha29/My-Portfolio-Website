---
title: "StartupLens AI: Funding-Readiness Assessment"
tagline: AI-powered product discovery for founders
summary: Helping founders understand whether they are ready for a funding conversation, before they approach investors, and what to do next if they are not.
kind: prototype
kind_label: AI product
years: MVP
order: 4
featured: true
demo: https://startup-score-ai.lovable.app/
facts:
  - label: Role
    value: Product Manager, 0→1 product
  - label: Scope
    value: Product discovery → AI workflow → UX → MVP → deployment
  - label: Built with
    value: Dify, Lovable, LLMs
  - label: Status
    value: Functional MVP
resume_points:
  - Built an AI-powered product discovery experience that helps founders stress-test startup ideas through contextual investigation, AI-led questioning, and structured opportunity assessment.
  - Designed the full experience end to end, from discovery and AI conversation to evidence assessment, prioritization, and automated product brief generation.
  - Applied core AI product concepts (LLMs, RAG, AI agents, orchestration, evidence grounding, evaluation, and human-in-the-loop design) to ground outputs in verifiable evidence rather than guesswork.
---

## The problem

Early-stage founders get plenty of feedback on their ideas, but much of it is overly encouraging, fragmented, hard to interpret, disconnected from how investors actually think, and focused on the idea rather than the evidence behind it. Founders often don't know:

- *Am I actually ready to talk to investors?*
- *If I'm not ready, what should I do next?*

**Insight:** the product shouldn't just tell founders whether their idea is "good". It should expose the assumptions, evidence gaps and risks that determine funding readiness.

## Product hypothesis

If founders are evaluated through a structured, investor-style conversation instead of a static questionnaire, the product can gather richer context and produce a more useful funding-readiness assessment.

If that assessment can then be turned into a practical product strategy, the product moves from **evaluation** to **decision support** to **action**:

**Founder → discovery → assessment → decision → strategy**

## Why a conversation, not a form

Startup context varies a lot. A rigid form would make founders guess up front what information the system needs. A conversation lets the system ask follow-up questions based on earlier answers while keeping context across the session.

| Approach | Advantage | Problem |
| --- | --- | --- |
| Static form | Predictable, easy to score | Rigid, shallow context |
| Chat | Flexible, contextual | Harder to control |
| Hybrid | Structured and contextual | More complex |

**Decision:** a conversational assessment, with a structured evaluation framework behind it.

## Architecture

I separated the **AI orchestration layer** (Dify) from the **presentation layer** (Lovable), so the conversational logic can evolve independently of the product interface. Conversation memory keeps context across turns.

## Designing the AI interaction

The assistant opens by explaining that it will help assess whether the startup idea could attract funding. Its instructions tell it to:

- ask focused questions
- not score prematurely
- look for evidence rather than assume it
- challenge vague claims
- separate facts from assumptions
- avoid blindly encouraging founders
- give actionable gaps

## Key product decisions

**1. Don't give a score immediately.**
A premature score can anchor founders before enough evidence is collected. StartupLens gathers structured context first and evaluates at the end, which reduces false precision and encourages richer answers.

**2. Don't position it as an investment advisor.**
A founder could read an AI-generated score as an investment recommendation. StartupLens is positioned as decision support, and says explicitly that the assessment is an opinion generated from the information the founder provided.

**3. Assessment, then strategy.**
An assessment says what's wrong but not what to do next. Product strategy is offered only after the assessment is complete, because the assessment provides the context that makes the strategy relevant: **evaluate → understand → act**.

**4. Don't force strategy generation.**
Nothing is generated unless the founder asks. Not every founder who gets a negative assessment should be pushed straight into building; the product lets them stop and validate their assumptions first.

## The product journey

1. **Homepage.** Positions StartupLens as decision support, not generic startup advice.
2. **Interactive evaluation.** The AI runs a structured conversation instead of a static form.
3. **AI orchestration.** Conversation memory keeps context across turns.
4. **Funding assessment.** Founder answers become an investor-style evaluation.
5. **Strategy prompt.** Instead of ending at the assessment, the product asks whether the founder wants to turn the findings into a product strategy.
6. **Strategy.** Findings become product priorities, validation goals and execution recommendations.

## How I'd measure it

These are the metrics I've proposed for the MVP. They are not measured results.

**North Star:** % of founders who complete an assessment and identify at least one actionable validation priority.

| Stage | Metrics |
| --- | --- |
| Activation | % starting an evaluation; % completing the first conversation |
| Engagement | Conversation completion rate; meaningful responses per session; assessment completion rate |
| Value | % rating the assessment useful; % finding at least one assumption they hadn't noticed |
| Strategy | % choosing to build a product strategy; strategy completion rate |
| Outcome | % returning after validation; % who changed a product decision because of the assessment |

## What's next

- **Investor-specific lenses** (angel, pre-seed, seed, sector-specific), because funding readiness depends on who you are pitching.
- **Benchmarking** against anonymized patterns from similar stages and markets.
- **Confidence scoring:** "Assessment confidence: medium", with the reasons, instead of a falsely precise "7.8/10".
- **An evidence → strategy loop:** founders return after 30, 60 or 90 days to update their evidence and get reassessed.

## What I learned

1. **AI products need a product framework before a prompt.** Output quality depends on how the underlying evaluation problem is structured.
2. **Conversational UX adds flexibility but reduces predictability.** Guardrails keep the AI from drifting into generic advice.
3. **AI should expose uncertainty, not hide it.** A confident-looking score can be less useful than a clear account of what is unknown.
4. **The best AI workflow doesn't end at the AI's answer.** The assessment creates the next product action: validation or strategy.
