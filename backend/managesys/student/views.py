from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Student

from rest_framework import generics
from .serializers import studentSerializer
# Create your views here.

def home(req):
    return render(req, 'home.html')
@api_view(['POST'])
def AddStudent(request):
     if request.method == 'POST':
        name = request.data.get('name')
        course = request.data.get('course')
        joindate = request.data.get('joindate')
        fee = request.data.get('fee')
        student = Student(name=name, course=course, joindate=joindate, fee=fee)
        student.save()
        return Response({'message': 'Student added Successfully!'},status=200,template_name='student_success.html')
        # return render(req, 'student_add.html',{"form":StudentForm})
@api_view(['POST'])
def editStudent(req):
   print(req.data)
   name = req.data.get('name')
   id = req.data.get('id')
   course = req.data.get('course')
   joindate = req.data.get('joindate')
   fee = req.data.get('fee')
   student= Student.objects.get(id=id)
   student.name=name
   student.course=course
   student.joindate=joindate
   student.fee=fee
   student.save()
   return Response({'message': 'Student Updated Successfully!'},status=200,template_name='updated.html')


# Reset Api

class serializeStudents(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class=studentSerializer
@api_view(['POST'])
def StudentDelete(req):
    if req.method == 'POST':
        id = req.data.get('id')
        Student.objects.filter(id=id).delete()
        return Response({'message': 'Student Deleted Successfully!'})
