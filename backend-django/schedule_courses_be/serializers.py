from rest_framework import serializers
from . models import ScheduleCourse

class ScheduleCourse(serializers.ModelSerializer):
    class Meta :
        model = ScheduleCourse
        fields = "__all__"