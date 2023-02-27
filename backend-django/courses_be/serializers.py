from rest_framework import serializers
from . models import NewCourse

class NewCourse(serializers.ModelSerializer):
    class Meta :
        model = NewCourse
        fields = "__all__"