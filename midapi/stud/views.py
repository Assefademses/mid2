from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from .models import stud
from .serializers import studentSerializer
from rest_framework.decorators import api_view


# Create your views here.
class listCreateAPI(generics.ListCreateAPIView):
    queryset = stud.objects.all()
    serializer_class = studentSerializer


class updateDeleteAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = stud.objects.all()
    serializer_class = studentSerializer
