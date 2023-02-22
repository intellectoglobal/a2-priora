from django.db import models

payment_status = (
    ('None':'None'),
    ('Paid':'Paid'),
    ('Not Yet':'Not Yet'),
)


class CouurseRegister(models.Model):
    register_id=models.AutoField(primary_key=True)
    selected_course=models.ForeignKey()
    applicant_name=models.CharField(max_length=20,blank=False)
    contact_no=models.IntegerField(max_digits=10,blank=False)
    email=models.EmailField(blank=False)
    alternative_email=models.EmailField()
    address=models.CharField(max_length=50)
    postal_code=models.IntegerField()
    FIN_NRIC_passport_no =models.IntegerField(max_digits=20)
    company_name=models.CharField(max_length=30)
    membership_type=models.BooleanField(default=False)
    membership_n0=models.IntegerField()
    payment_status=models.CharField()
    payment_receipt=models.
   
