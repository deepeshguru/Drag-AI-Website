import requests
import sys
from datetime import datetime
import json

class DragAIBackendTester:
    def __init__(self, base_url="https://drag-refresh.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "name": name,
            "success": success,
            "details": details
        })

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                self.log_test(name, False, f"Unsupported method: {method}")
                return False, {}

            print(f"   Status Code: {response.status_code}")
            
            success = response.status_code == expected_status
            
            if success:
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                    self.log_test(name, True)
                    return True, response_data
                except json.JSONDecodeError:
                    print(f"   Response: {response.text[:200]}...")
                    self.log_test(name, True)
                    return True, {}
            else:
                error_details = f"Expected {expected_status}, got {response.status_code}"
                try:
                    error_response = response.json()
                    error_details += f" - {error_response}"
                except:
                    error_details += f" - {response.text[:200]}"
                
                self.log_test(name, False, error_details)
                return False, {}

        except requests.exceptions.RequestException as e:
            error_details = f"Request failed: {str(e)}"
            self.log_test(name, False, error_details)
            return False, {}

    def test_hello_world(self):
        """Test the basic hello world endpoint"""
        return self.run_test(
            "Hello World API",
            "GET",
            "api/",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "service": "AI/ML Consulting",
            "budget": "$50K - $100K",
            "message": "This is a test message for the contact form.",
            "timeline": "3-6 months"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_contact_data
        )
        
        if success and response:
            # Verify response contains expected fields
            required_fields = ["id", "name", "email", "message", "timestamp"]
            missing_fields = [field for field in required_fields if field not in response]
            
            if missing_fields:
                self.log_test("Contact Form Response Validation", False, f"Missing fields: {missing_fields}")
                return False, response
            else:
                self.log_test("Contact Form Response Validation", True)
                return True, response
        
        return success, response

    def test_get_contact_forms(self):
        """Test retrieving contact forms"""
        return self.run_test(
            "Get Contact Forms",
            "GET",
            "api/contact",
            200
        )

    def test_status_check_creation(self):
        """Test status check creation"""
        test_status_data = {
            "client_name": "Test Client"
        }
        
        return self.run_test(
            "Status Check Creation",
            "POST",
            "api/status",
            200,
            data=test_status_data
        )

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Drag AI Backend API Tests")
        print("=" * 50)
        
        # Test basic connectivity
        self.test_hello_world()
        
        # Test contact form functionality (most important)
        contact_success, contact_response = self.test_contact_form_submission()
        
        # Test retrieving contact forms
        self.test_get_contact_forms()
        
        # Test status check functionality
        self.test_status_check_creation()
        self.test_get_status_checks()
        
        # Print summary
        print("\n" + "=" * 50)
        print("📊 TEST SUMMARY")
        print("=" * 50)
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        # Print failed tests
        failed_tests = [test for test in self.test_results if not test["success"]]
        if failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in failed_tests:
                print(f"   - {test['name']}: {test['details']}")
        
        return self.tests_passed == self.tests_run

def main():
    """Main test execution"""
    tester = DragAIBackendTester()
    
    try:
        success = tester.run_all_tests()
        return 0 if success else 1
    except Exception as e:
        print(f"❌ Test execution failed: {str(e)}")
        return 1

if __name__ == "__main__":
    sys.exit(main())