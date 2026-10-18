-- Lightweight build: turn off blur/shadow effects by default (can be re-enabled in Settings)
UPDATE settings SET advanced_rendering = 0;
-- Lite build: no telemetry, no Discord status, no ad personalization
UPDATE settings SET telemetry = 0, discord_rpc = 0, personalized_ads = 0;
