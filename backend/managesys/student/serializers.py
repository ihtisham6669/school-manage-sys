# serializers.py

from rest_framework import serializers
from .models import Student

class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'  # You can specify specific fields if needed
