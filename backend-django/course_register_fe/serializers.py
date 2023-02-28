from rest_framework import serializers
from . models import CourseRegister

class CourseRegisterSerializer(serializers.ModelSerializer):
    class Meta :
        model = CourseRegister
        fields = "__all__"

 