-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  referrer TEXT,
  country TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_created_at ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ip_created ON waitlist(ip_address, created_at);