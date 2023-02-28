from django.urls import path
from .views import (CourseRegisterView, CourseMenuView,
                    UserSelectedCourseView, CourseInvoiceView)

urlpatterns = [
    path('course_menu', CourseMenuView.as_view()),
    path('register', CourseRegisterView.as_view()),
    path('selected_course/<int:id>', UserSelectedCourseView.as_view()),
    path('selected_course/<int:id>/delete', UserSelectedCourseView.as_view()),
    path('invoice/<int:id>', CourseInvoiceView.as_view())
]
