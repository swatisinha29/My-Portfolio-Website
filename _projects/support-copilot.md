---
title: "AI Customer Support Copilot"
summary: Product strategy for a RAG-based copilot that drafts grounded, source-cited replies for SaaS support agents, with a human approving every response.
kind: concept
kind_label: AI strategy
years: Case study
order: 5
facts:
  - label: Type
    value: AI product strategy case study
  - label: Users
    value: Support agents, onboarding specialists, support ops
  - label: Approach
    value: RAG + human-in-the-loop, partial automation
  - label: Target outcome
    value: −30% average handling time; 60%+ draft acceptance
---

> **Principle:** augment human workflows before attempting to replace them. The copilot drafts; the agent approves.

## The problem

Support agents at SaaS companies spend a lot of time searching help-center articles, refund policies, onboarding workflows and troubleshooting guides while answering repetitive questions. The result is a high average handling time (AHT), inconsistent quality, slow resolution, heavy training overhead and rising costs.

Fully autonomous AI support isn't the answer either: it risks hallucinated answers, wrong policy advice, outdated information and lost customer trust.

## Product goal

A copilot that retrieves company knowledge in real time and drafts grounded responses, reducing manual effort and hallucinations while keeping interactions high-trust. It is positioned as **AI-assisted support augmentation**, not a replacement for agents.

## Hypothesis

If agents get AI drafts grounded in internal documentation, they will respond faster, make fewer policy errors, handle more tickets per day, raise customer satisfaction and do less repetitive work.

## Why RAG

The knowledge base changes constantly: policies, workflows, onboarding steps and account-specific guidance. A pre-trained LLM alone would be out of date, would hallucinate policy answers and couldn't see internal documents. Fine-tuning alone can't keep up with real-time updates either. Retrieval-augmented generation can.

## Strategy

1. **Human in the loop.** Agents keep final approval, editing rights and escalation control.
2. **Source-grounded answers.** Every draft shows linked sources, retrieved references and a confidence indicator.
3. **Partial automation over full automation.** The copilot drafts replies, summarizes policies, suggests troubleshooting steps and recommends macros. It does **not** issue refunds, modify accounts or take other sensitive actions.

## How it works

1. An agent receives a ticket.
2. The system retrieves relevant documentation with semantic search.
3. The retrieved context is injected into the LLM prompt.
4. The LLM drafts a grounded response.
5. The agent reviews, edits and approves it.
6. The final answer goes to the customer.

Because retrieval is semantic, "I want to cancel my premium plan" finds documentation on cancellation, refunds and billing even when the exact words don't match.

| Component | Purpose |
| --- | --- |
| Knowledge base | Internal support documentation |
| Embedding layer | Semantic document representation |
| Vector database | Semantic retrieval |
| Retrieval engine | Relevant context retrieval |
| LLM layer | Response generation |
| Human review layer | Validation and approval |

## Designing for trust

- **Editable drafts** that agents can refine and personalize.
- **Regenerate** when a draft is unclear or incomplete.
- **Source preview** of the retrieved articles, chunks and policy references.
- **Confidence labels** (high confidence, medium confidence, needs review), based on retrieval quality, relevance and context completeness.

## Metrics

| Primary metric | Goal |
| --- | --- |
| Average handling time | −30% |
| First-response accuracy | +20% |
| AI draft acceptance rate | 60%+ |
| Customer satisfaction | +15% |

AI quality is tracked through hallucination rate, retrieval relevance, response latency, agent trust score and documentation coverage.

## Cost

| Cost | Estimate |
| --- | --- |
| LLM usage | ~$5,000–20,000/month, depending on ticket volume and model |
| Vector database | ~$500–5,000/month, depending on retrieval volume |
| Embeddings | Moderate; grows with documentation |
| Orchestration and infrastructure | Can approach model costs at scale |

To keep costs down, smaller models handle tagging, intent classification and confidence scoring, and premium models are reserved for complex reasoning and drafting. Frequent retrievals are cached, and simple deterministic flows skip the LLM entirely.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Hallucinations | Source-grounded retrieval |
| Incorrect retrieval | Better chunking and embeddings |
| Low agent trust | Human approval and citations |
| Slow responses | Cached retrieval pipelines |
| Outdated documentation | Real-time knowledge sync |

## What I took away

- Retrieval quality is the foundation of trustworthy AI.
- Human oversight stays critical in high-trust workflows.
- Transparency drives adoption.
- AI UX matters as much as model capability.
- Partial automation often beats full automation in enterprise workflows.
- Cost-aware architecture decisions are essential for scale.
