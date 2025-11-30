
from playwright.sync_api import sync_playwright, expect

def verify_logo():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))
        page.on("requestfailed", lambda request: print(f"Request failed: {request.url} {request.failure}"))

        try:
            # Go to the homepage
            page.goto("http://localhost:3000")

            # Wait for the logo to be visible
            logo = page.get_by_alt_text("LM Studios Logo")
            expect(logo).to_be_visible()

            # Check naturalWidth
            is_loaded = logo.evaluate("img => img.naturalWidth > 0")
            if is_loaded:
                print("Image loaded successfully (naturalWidth > 0)")
            else:
                print("Image failed to load (naturalWidth == 0)")

            # Take a screenshot of the navigation bar area
            page.screenshot(path="verification/logo_debug.png", clip={"x": 0, "y": 0, "width": 800, "height": 100})
            print("Screenshot saved to verification/logo_debug.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_logo()
