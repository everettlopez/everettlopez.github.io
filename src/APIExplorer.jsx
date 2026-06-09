import { useState } from "react";

const GROUPS = [
  {
    label: "Authentication",
    desc: "JWT login & token management",
    endpoints: [
        {
        method: "POST", path: "/auth/registrations", summary: "Register a new account",
        locked: false,
        body: { username: '"everett"', email: '"user@example.com"', password: '"••••••••"' },
        bodyType: "Registration",
        response200: {id: '"0"', username: '"everett"', email: '"user@example.com"'},
        responses: [["204","Successful Response"],["422","Validation error"]],
      },
      {
        method: "POST", path: "/auth/tokens", summary: "Retrieve tokens",
        body: { email: '"user@example.com"', password: '"••••••••"' },
        bodyType: "AccessToken",
        response200: { access_token: '"eyJhbGci…"', token_type: '"bearer"'},
        responses: [["200","Successful Response"],["422","Validation error"]],
      },
      {
        method: "POST", path: "/auth/logins", summary: "Authenticate user, return JWT",
        locked: false,
        body: { email: '"user@example.com"', password: '"••••••••"' },
        bodyType: "LoginRequest",
        response200: { access_token: '"eyJhbGci…"', token_type: '"bearer"', expires_in: "3600" },
        responses: [["204","Successful Response"],["422","Validation error"]],
      },
      {
        method: "DELETE", path: "/auth/logins", summary: "Delete a users login session",
        bodyType: "LoginRequest",
        responses: [["204","Successful Response"],["422","Validation error"]],
      },
    ],
  },
  {
    label: "Accounts",
    desc: "User registration & profile",
    endpoints: [
      {
        method: "GET", path: "/accounts", summary: "Returns a JSON object with two keys: metadata, accounts",
        locked: false,
        params: [{ name: "sort", type: "string", required: false, desc: "Sorting filter for accounts" }],
        response200: { metadata: '{count: 0, sort: string}',  accounts: '[{id: 0, username: string}]'},
        responses: [["200","Account created"],["422","Validation error"]],
      },
      {
        method: "GET", path: "/accounts/me", summary: "Get authenticated account",
        locked: false,
        params: [{ name: "id", type: "integer", required: true, desc: "Account primary key" }],
        response200: { },
        responses: [["200","Successful Response"]],
      },
      {
        method: "DELETE", path: "/accounts/me", summary: "Update authenticated account",
        locked: false,
        response200: { },
        responses: [["204","Successful Response"]],
      },
      {
        method: "PATCH", path: "/accounts/me", summary: "Updating authenticated account",
        locked: false,
        body: { username: '"everett"', email: '"everett@cool.com"' },
        bodyType: "LoginRequest",
        response200: {  },
        responses: [["200","Successful Response"],["422","Validation Error"]],
      },
      {
        method: "GET", path: "/accounts/{accounts_id}", summary: "Retrieve account by ID",
        locked: false,
        params: [{ name: "account_id", type: "integer", required: true, desc: "Account ID" }],
        response200: { id: '"0"', username: '"string"'},
        responses: [["200","Successful Response"],["404","Account Not Found"], ["422", "Validation Error"]],
      },
      {
        method: "PUT", path: "/accounts/me/password", summary: "Update account password",
        locked: false,
        body: { old_password: '"string"', new_password: '"string"' }, 
        response200: { },
        responses: [["204","Successful Response"], ["422", "Validation Error"]],
      },
    ],
  },
  {
    label: "Chats",
    desc: "Thread & participant management",
    endpoints: [
      {
        method: "GET", path: "/chats", summary: "Retrieve all the chats in the database",
        locked: false,
        body: { participant_ids: "[2, 7]", name: '"Weekend plans"' },
        bodyType: "ConversationCreate",
        response200: { id: "9", name: '"Weekend plans"', participants: "[…]", created_at: '"2024-12-01T10:00:00Z"' },
        responses: [["200","Conversation created"],["401","Unauthorized"]],
      },
      {
        method: "GET", path: "/conversations", summary: "List conversations for current user",
        locked: true,
        params: [
          { name: "skip", type: "integer", required: false, desc: "Pagination offset" },
          { name: "limit", type: "integer", required: false, desc: "Max results (default 20)" },
        ],
        response200: { total: "3", items: "[{ id, name, last_message, … }]" },
        responses: [["200","Paginated list"],["401","Unauthorized"]],
      },
      {
        method: "GET", path: "/conversations/{id}", summary: "Get conversation by ID",
        locked: true,
        params: [{ name: "id", type: "integer", required: true, desc: "Conversation ID" }],
        response200: { id: "9", name: '"Weekend plans"', participants: "[…]", messages: "[…]" },
        responses: [["200","Conversation detail"],["401","Unauthorized"],["404","Not found"]],
      },
      {
        method: "DELETE", path: "/conversations/{id}", summary: "Delete a conversation",
        locked: true,
        params: [{ name: "id", type: "integer", required: true, desc: "Conversation ID" }],
        response200: { detail: '"Conversation deleted"' },
        responses: [["200","Deleted"],["401","Unauthorized"],["404","Not found"]],
      },
    ],
  },
  {
    label: "Messages",
    desc: "Send, retrieve & delete messages",
    endpoints: [
      {
        method: "POST", path: "/messages", summary: "Send a message",
        locked: true,
        body: { conversation_id: "9", content: '"Hey, are you free Saturday?"' },
        bodyType: "MessageCreate",
        response200: { id: "201", conversation_id: "9", sender_id: "42", content: '"Hey, are you free Saturday?"', sent_at: '"2024-12-01T10:01:00Z"' },
        responses: [["200","Message created"],["401","Unauthorized"],["422","Validation error"]],
      },
      {
        method: "GET", path: "/messages/{conversation_id}", summary: "Fetch messages in a conversation",
        locked: true,
        params: [
          { name: "conversation_id", type: "integer", required: true, desc: "Conversation ID" },
          { name: "limit", type: "integer", required: false, desc: "Max messages (default 50)" },
        ],
        response200: { total: "24", items: "[{ id, sender_id, content, sent_at }]" },
        responses: [["200","Message list"],["401","Unauthorized"],["404","Not found"]],
      },
      {
        method: "DELETE", path: "/messages/{id}", summary: "Delete a message",
        locked: true,
        params: [{ name: "id", type: "integer", required: true, desc: "Message ID" }],
        response200: { detail: '"Message deleted"' },
        responses: [["200","Deleted"],["401","Unauthorized"],["403","Forbidden"],["404","Not found"]],
      },
    ],
  },
];

const METHOD_STYLES = {
  GET:    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25",
  POST:   "bg-blue-400/10 text-blue-400 border border-blue-400/25",
  PUT:    "bg-amber-400/10 text-amber-400 border border-amber-400/25",
  DELETE: "bg-red-400/10 text-red-400 border border-red-400/25",
};

const STATUS_STYLES = {
  "200": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "401": "bg-red-400/10 text-red-400 border border-red-400/20",
  "403": "bg-red-400/10 text-red-400 border border-red-400/20",
  "404": "bg-red-400/10 text-red-400 border border-red-400/20",
  "422": "bg-amber-400/10 text-amber-400 border border-amber-400/20",
};

function JSONBlock({ obj }) {
  const entries = Object.entries(obj);
  return (
    <div className="bg-[#0d0f14] border border-white/7 rounded-lg p-3 font-mono text-[11px] leading-relaxed">
      <span className="text-gray-600">{"{"}</span>
      {entries.map(([k, v], i) => (
        <div key={k} className="pl-4">
          <span className="text-emerald-300">"{k}"</span>
          <span className="text-gray-600">: </span>
          <span className="text-red-300">{v}</span>
          {i < entries.length - 1 && <span className="text-gray-600">,</span>}
        </div>
      ))}
      <span className="text-gray-600">{"}"}</span>
    </div>
  );
}

function Endpoint({ ep }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-t border-white/5 transition-colors duration-150 ${open ? "bg-white/[0.03]" : "hover:bg-white/[0.025]"}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-0 text-left cursor-pointer bg-[#161920]"
        style={{ border: "none", padding: 0 }}
      >
        <div className="w-[72px] shrink-0 flex justify-center pt-[13px] self-start px-2 bg-[#161920]">
          <span className={`font-mono text-[10px] font-medium px-1.5 py-0.5 rounded ${METHOD_STYLES[ep.method]}`}>
            {ep.method}
          </span>
        </div>
        <div className="flex-1 py-3 pr-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[12px] text-gray-200">{ep.path}</span>
            {ep.locked && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            )}
            <span className="text-[12px] text-gray-600">{ep.summary}</span>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="ml-auto shrink-0"
              aria-hidden="true"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </button>

      {open && (
        <div className="pl-[72px] pr-5 pb-4 flex flex-col gap-3">
          {ep.params && ep.params.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600 mb-2">Parameters</p>
              {ep.params.map((p) => (
                <div key={p.name} className="flex items-center gap-2 px-2.5 py-1.5 bg-white/[0.03] border border-white/6 rounded-md mb-1">
                  <span className="font-mono text-[12px] text-emerald-300">{p.name}</span>
                  <span className="font-mono text-[11px] text-gray-600 px-1.5 py-0.5 bg-white/[0.04] rounded">{p.type}</span>
                  {p.required
                    ? <span className="font-mono text-[10px] text-red-400">required</span>
                    : <span className="font-mono text-[10px] text-gray-600">optional</span>}
                  <span className="text-[11px] text-gray-600 ml-auto">{p.desc}</span>
                </div>
              ))}
            </div>
          )}

          {ep.body && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600 mb-2">
                Request body — {ep.bodyType}
              </p>
              <JSONBlock obj={ep.body} />
            </div>
          )}

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600 mb-2">Response — 200 OK</p>
            <JSONBlock obj={ep.response200} />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600 mb-2">Status codes</p>
            {ep.responses.map(([code, desc]) => (
              <div key={code} className="flex items-center gap-2 mb-1">
                <span className={`font-mono text-[11px] px-2 py-0.5 rounded ${STATUS_STYLES[code] || STATUS_STYLES["200"]}`}>
                  {code}
                </span>
                <span className="text-[11px] text-gray-600">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function APIExplorer() {
  return (
    <section className="py-24 px-6" style={{ background: "#31343d" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{ background: "rgb(255, 255, 255)", color: "#000000" }}>
            REST API
          </span>
          <h2
          className="text-5xl font-semibold mb-4"
          style={{
            color: "#f9fafb",
            fontFamily: "'Geist', 'Inter', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
            Built from scratch with FastAPI
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
            12 endpoints across 4 resource groups. Every route is typed end-to-end — Pydantic models
            validate input, SQLModel handles persistence, and FastAPI auto-generates the OpenAPI spec.
          </p>
        </div>

        {/* Browser chrome + explorer */}
        <div className="rounded-[14px] overflow-hidden border border-white/8">

          {/* Top bar */}
          <div className="bg-[#13151a] px-4 py-2.5 flex items-center justify-between border-b border-white/6">
            <div className="flex gap-1.5">
              {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />)}
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-md px-3 py-1">
              <span className="font-mono text-[11px] text-gray-500">
                <span className="text-gray-400">localhost:8000</span>/docs
              </span>
            </div>
          </div>

          {/* Swagger title bar */}
          <div className="bg-[#161920] px-5 py-3.5 flex items-center justify-between border-b border-white/6">
            <div className="flex items-center gap-2.5">
              <span className="text-[15px] font-medium text-gray-200">Chat Express API</span>
              <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-white/6 text-gray-500">v1.0.0</span>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-[11px] text-gray-600">FastAPI <span className="text-gray-500">0.111</span></span>
              <span className="font-mono text-[11px] text-gray-600">Python <span className="text-gray-500">3.11</span></span>
            </div>
          </div>

          {/* Route groups */}
          {GROUPS.map((g) => (
            <div key={g.label} className="border-b border-white/5 last:border-b-0">
              <div className="px-5 py-3 flex items-center gap-2.5 bg-[#161920]">
                <span className="text-[13px] font-medium text-gray-300">{g.label}</span>
                <span className="font-mono text-[10px] text-gray-600 px-1.5 py-0.5 rounded-full bg-white/4 border border-white/6">
                  {g.endpoints.length} routes
                </span>
                <span className="text-[11px] text-gray-600 ml-auto">{g.desc}</span>
              </div>
              {g.endpoints.map((ep, i) => (
                <Endpoint key={i} ep={ep} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
