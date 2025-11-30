from playwright.sync_api import Page, expect, sync_playwright

def verify_about_us(page: Page):
  # 1. Arrange: Go to the homepage.
  page.goto("http://localhost:3000")

  # 2. Act: Scroll to the About Us section.
  # We can click the 'About' link in the nav
  page.get_by_role("link", name="About").first.click()

  # Wait for scrolling
  page.wait_for_timeout(1000)

  # 3. Assert: Check if the About Us section is visible and has the correct text.
  about_section = page.locator("#about")
  expect(about_section).to_be_visible()

  expect(about_section).to_contain_text("About Us")
  expect(about_section).to_contain_text("A Dedicated Duo")
  expect(about_section).to_contain_text("We are a two-person team passionate about helping small businesses thrive online.")

  # 4. Screenshot: Capture the About Us section.
  # Take a screenshot of the viewport after scrolling
  page.screenshot(path="verification/about_us_section.png")

if __name__ == "__main__":
  with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    try:
      verify_about_us(page)
    except Exception as e:
      print(f"Error: {e}")
    finally:
      browser.close()
