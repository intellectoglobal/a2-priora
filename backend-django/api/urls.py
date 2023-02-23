from django.urls import path,include

urlpatterns = [
    path('course_register/',include("course_register_fe.urls")),
    path('courses/',include("courses_be.urls")),
    path('schedule_courses/',include("schedule_courses_be.urls")),
    path('payment/',include("payment.urls")),
]
