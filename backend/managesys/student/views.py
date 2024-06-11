from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .forms import StudentForm
from .forms import StudentDelete
from .forms import StudentUpdate
from .forms import Studentupd
from .models import Student

from rest_framework import generics
from .serializers import studentSerializer
# Create your views here.
@api_view(['POST'])
def home(req):
    return render(req, 'home.html')
@api_view(['POST'])
def AddStudent(request):
     if request.method == 'POST':
        name = request.data.get('name')
        id = request.data.get('id')
        course = request.data.get('course')
        joindate = request.data.get('joindate')
        fee = request.data.get('fee')
        student = Student(name=name, id=id, course=course, joindate=joindate, fee=fee)
        student.save()
        return Response({'message': 'Student added Successfully!'})
        # return render(req, 'student_add.html',{"form":StudentForm})
def UpdateStudent(req):
    if req.method == 'POST':
        id = req.POST.get('UID')
        student= Student.objects.get(id=id)
        return render(req, 'student_update.html',{"form":StudentUpdate,"std":student})
def StudentUpdater(req):
    if req.method == 'POST':
        name = req.POST.get('name')
        id = req.POST.get('UID')
        course = req.POST.get('course')
        joindate = req.POST.get('joindate')
        fee = req.POST.get('fee')
        student= Student.objects.get(id=id)
        student.name=name
        student.course=course
        student.joindate=joindate
        student.fee=fee
        student.save()
        return render(req, 'updated.html')
    else:
        return render(req, 'student_update.html')
def allStudents(req):
    data = Student.objects.all()
    return render(req, 'students.html',{"data":data,"del":StudentDelete,"upd":Studentupd})

# Reset Api

class serializeStudents(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class=studentSerializer
@api_view(['POST'])
def StudentDelete(req):
    if req.method == 'POST':
        id = req.POST.get('id')
        Student.objects.filter(id=id).delete()
        return render(req, 'student_deleted.html')
