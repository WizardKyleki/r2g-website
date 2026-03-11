// ── Zoey Dashboard Types ────────────────────────────────────────────────────

export type LeadStatus = "new" | "contacted" | "converted" | "lost";

export interface Conversation {
  id: string;
  created_at: string;
  updated_at: string;
  status: "active" | "completed";
  message_count: number;
  user_message_count: number;
  has_lead: boolean;
  lead_name: string | null;
  lead_phone: string | null;
  lead_email: string | null;
  lead_moving_from: string | null;
  lead_moving_to: string | null;
  lead_move_type: string | null;
  lead_status: LeadStatus;
  page_url: string | null;
  display_name: string | null;
  // New fields
  rating: number | null; // 1 = thumbs up, -1 = thumbs down
  rating_feedback: string | null;
  admin_notes: string | null;
  tags: string[];
  ab_test_id: string | null;
  ab_variant: string | null;
  // Phase 3
  summary: string | null;
  lead_score: number;
  sentiment: "positive" | "neutral" | "negative" | "frustrated";
  // Live takeover
  admin_takeover: boolean;
  admin_takeover_at: string | null;
}

export type Sentiment = "positive" | "neutral" | "negative" | "frustrated";

export interface ZoeySetting {
  key: string;
  value: Record<string, unknown>;
  updated_at: string;
}

export interface WebhookSettings {
  url: string;
  enabled: boolean;
}

export interface BusinessHoursSettings {
  start: number;
  end: number;
  days: string[];
  timezone: string;
}

export interface GreetingsSettings {
  homepage: string;
  quote: string;
  suburb: string;
  interstate: string;
  services: string;
  default: string;
  [key: string]: string;
}

export interface DigestSettings {
  email: string;
  enabled: boolean;
}

export interface Message {
  id: string;
  conversation_id: string;
  role: "user" | "assistant";
  content: string;
  tool_name: string | null;
  tool_input: Record<string, string> | null;
  created_at: string;
  is_admin: boolean;
}

export interface ConversationWithMessages extends Conversation {
  messages: Message[];
}

export interface DashboardStats {
  totalConversations: number;
  activeConversations: number;
  totalLeads: number;
  conversionRate: number;
  todayConversations: number;
  todayLeads: number;
  dailyBreakdown: { date: string; conversations: number; leads: number }[];
  // Enhanced analytics
  avgRating?: number;
  totalRatings?: number;
  thumbsUp?: number;
  thumbsDown?: number;
  hourlyBreakdown?: { hour: number; conversations: number }[];
  topPages?: { page: string; count: number }[];
}

export interface AnalyticsTrends {
  // Weekly trends (last 12 weeks)
  weeklyTrends: {
    week: string;
    weekLabel: string;
    conversations: number;
    leads: number;
    conversionRate: number;
  }[];

  // Daily conversations (last 90 days for sparkline)
  dailyConversations: {
    date: string;
    conversations: number;
    leads: number;
  }[];

  // Sentiment breakdown
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
    frustrated: number;
    unrated: number;
  };

  // Tag distribution
  tagDistribution: {
    tag: string;
    count: number;
  }[];

  // Lead score distribution (0-5)
  scoreDistribution: number[];

  // Hourly heatmap
  hourlyBreakdown: { hour: number; conversations: number }[];

  // Top entry pages
  topPages: { page: string; count: number }[];

  // Satisfaction trend (weekly)
  satisfactionTrend: {
    week: string;
    weekLabel: string;
    thumbsUp: number;
    thumbsDown: number;
    rate: number;
  }[];

  // Summary stats
  totalConversations: number;
  totalLeads: number;
  conversionRate: number;
  avgLeadScore: number;
  avgMessagesPerConvo: number;
  avgResponseRate: number;
  totalThumbsUp: number;
  totalThumbsDown: number;
}

export interface KnowledgeBaseEntry {
  id: string;
  question: string;
  answer: string;
  category: string;
  enabled: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ABTest {
  id: string;
  name: string;
  section_key: string;
  variant_a: string;
  variant_b: string;
  status: "draft" | "running" | "completed";
  traffic_split: number;
  variant_a_conversations: number;
  variant_a_leads: number;
  variant_b_conversations: number;
  variant_b_leads: number;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
}

// ── Notifications ──────────────────────────────────────────────────────────

export type NotificationType =
  | "new_conversation"
  | "new_message"
  | "new_lead"
  | "frustrated_customer"
  | "negative_rating";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  conversation_id: string;
  is_read: boolean;
  created_at: string;
  metadata: Record<string, unknown>;
}

export interface NotificationsResponse {
  notifications: Notification[];
  unread_count: number;
}
