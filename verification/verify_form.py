from playwright.sync_api import sync_playwright

def verify_quote_form():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page
        page.goto("http://localhost:3000")

        # Scroll to the quote form section
        # The form has an id of "quote"
        quote_section = page.locator("#quote")
        quote_section.scroll_into_view_if_needed()

        # Wait for the form to be visible
        quote_section.wait_for(state="visible")

        # Take a screenshot of the initial state (Step 1)
        page.screenshot(path="verification/step1_identity.png")
        print("Step 1 screenshot taken.")

        # Fill out Step 1
        page.fill("input[name='name']", "Test User")
        page.fill("input[name='email']", "test@example.com")
        page.fill("input[name='phone']", "1234567890")

        # Click Next Step
        page.click("button:has-text('Next Step')")

        # Wait for Step 2 to be visible
        page.wait_for_selector("text=Step 2: Project Details")

        # Take a screenshot of Step 2
        page.screenshot(path="verification/step2_project_details.png")
        print("Step 2 screenshot taken.")

        # Select "E-Commerce" and "New Website Build" (default)
        page.click("text=E-Commerce")

        # Click Next Step
        page.click("button:has-text('Next Step')")

        # Wait for Step 3 to be visible
        page.wait_for_selector("text=Step 3: Scope & Budget")

        # Take a screenshot of Step 3
        page.screenshot(path="verification/step3_scope.png")
        print("Step 3 screenshot taken.")

        # Select Budget and Timeline
        page.click("text=$1,500 - $3,000")
        page.click("text=Within 2-4 weeks")
        page.click("text=I have all text and images ready.")

        # Take a screenshot of filled Step 3
        page.screenshot(path="verification/step3_filled.png")
        print("Step 3 filled screenshot taken.")

        # Submit the form (Mock submission behavior)
        # Note: We can't easily verify the actual submission to formsubmit.co without mocking fetch or checking network logs.
        # But we can check if it goes to the success state (Step 4)

        # For this verification script, I'll stop here to check the UI flow.

        browser.close()

if __name__ == "__main__":
    verify_quote_form()
