from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from myapplication.models import Item


class ItemAPITest(APITestCase):
    def setUp(self):
        self.item = Item.objects.create(name='Test Item', description='Test Description')

    def test_create_item(self):
        url = reverse('item-list')
        data = {'name': 'Sample Item', 'description': 'This is a sample item.'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_read_item(self):
        url = reverse('item-detail', args=[self.item.id])
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_item(self):
        response = self.client.get(reverse('item-detail', kwargs={'pk': self.item.pk}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_item(self):
        url = reverse('item-detail', args=[self.item.id])
        data = {'name': 'Updated Item', 'description': 'This is an updated description.'}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_item(self):
        url = reverse('item-detail', args=[self.item.id])
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
