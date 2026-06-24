/* ── ABOUT ── */
.about {
  background: var(--color-white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text p {
  color: var(--color-light);
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 0.97rem;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  background: var(--color-cream);
  border-radius: var(--radius);
  border-left: 3px solid var(--color-sage);
}

.hi-icon {
  font-size: 1.2rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.hi-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-ink);
  margin-bottom: 4px;
}

.hi-desc {
  font-size: 0.82rem;
  color: var(--color-light);
  line-height: 1.5;
}
