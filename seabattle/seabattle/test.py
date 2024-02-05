from django.test import TestCase

# Create your tests here.

class testmain(TestCase):
    def test_index(self):
        resource = self.client.get('/main')
        self.assertEqual(resource.status_code,200)

class testmain2(TestCase):
    def test_index(self):
        resource = self.client.get('/login')
        self.assertEqual(resource.status_code,200)

class testmain3(TestCase):
    def test_index(self):
        resource = self.client.get('/register')
        self.assertEqual(resource.status_code,200)
# Create your tests here.

class testgrounds(TestCase):
    def test_index(self):
        resource = self.client.get('/grounds/')
        self.assertEqual(resource.status_code,200)