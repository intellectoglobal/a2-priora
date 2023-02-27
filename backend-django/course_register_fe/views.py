from django.shortcuts import render
from rest_framework.response import Response
from .serializers import CourseRegisterSerializer
from .models import CourseRegister
from rest_framework.views import APIView
# Create your views here.

class CourseRegisterView(APIView):
    serializer_class = CourseRegisterSerializer


    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = CourseRegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response" : "Course is successfully registered.","data" : serializer.data})

class User_info(APIView):
    serializer_class = CourseRegisterSerializer


    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = CourseRegister.objects.all()
            data = [{
                    "Name" : i.Name,
                    "FIN_NRIC_Passport_no": i.FIN_NRIC_Passport_no,
                    "Selected Course" : i.Selected_Course,
                    "Delete" : i.Delete,
                    }
             for i in datas]
        return Response(data)
    

    def delete(self, request, id, *args, **kwargs):
        OrderData = CourseRegister.objects.filter(id=id)
        OrderData.delete()
        return Response({"Response": "Registered course is Successfully Deleted"})
    

class Course_Menu(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = CourseRegister.objects.all()
            data = [{
                    "Course name" : i.Course_name,
                    "Date" : i.Date,
                    "Time" : i.Time,
                    "Accrediation points" :i.Accrediation_points,
                    "Fee" : i.Fee,
                    }
             for i in datas]
        return Response(data)


class Course_Invoice(APIView):
    serializer_class = CourseRegisterSerializer

    def get(self, request, *args, **kwargs):
        if request.method == 'GET':
            datas = CourseRegister.objects.all()
            data = [{
                    "Course title" : i.Course_title,
                    "Fee" : i.Fee,
                    "Payment type" : i.Payment_tyoe,
                    }
             for i in datas]
        return Response(data)