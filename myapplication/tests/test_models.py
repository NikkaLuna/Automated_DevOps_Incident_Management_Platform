from django.test import TestCase
from myapplication.models import Item


class ItemModelTest(TestCase):
    def setUp(self):
        self.item = Item.objects.create(name='Test Item', description='Test Description')

    def test_item_creation(self):
        self.assertEqual(self.item.name, 'Test Item')
        self.assertEqual(self.item.description, 'Test Description')


