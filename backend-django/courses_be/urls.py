from django.urls import path
from .views import (ListOfCourseView, AddNewCourseView, CertificateStatus,
                    ParticipantDetailsView, PaymentView, PaymentReceiptView)


urlpatterns = [
    path('courses/<int:id>', ListOfCourseView.as_view()),
    path('courses', AddNewCourseView.as_view()),
    path('courses/<int:id>', CertificateStatus.as_view()),
    path('courses/<int:id>/update', CertificateStatus.as_view()),
    path('courses/<int:id>', PaymentView.as_view()),
    path('courses/<int:id>/update', PaymentView.as_view()),
    path('courses/<int:id>', PaymentReceiptView.as_view()),
    path('courses/<int:id>/update', PaymentReceiptView.as_view()),
    path('courses/<int:id>', ParticipantDetailsView.as_view()),
    path('courses/<int:id>/update', ParticipantDetailsView.as_view()),
]
