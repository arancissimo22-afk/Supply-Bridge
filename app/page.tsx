export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🚀 Wholesale Store</h1>
      <p>Your website is now live on Vercel.</p>

      <div style={{ marginTop: 20 }}>
        <a href="/shop">
          <button style={{ padding: 10, marginRight: 10 }}>
            Go to Shop
          </button>
        </a>

        <a href="/cart">
          <button style={{ padding: 10 }}>
            View Cart
          </button>
        </a>
      </div>
    </main>
  );
}
