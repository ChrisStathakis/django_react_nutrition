from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from decimal import Decimal

GENDER_CHOICES = (
    ('a', 'Male'),
    ('b', 'Female')
)

WORKOUT_LVL_CHOICES = (
    ('1.2', 'sedentary (little to no exercise)'),
    ('1.375', 'lightly active (light exercise 1–3 days per week'),
    ('1.55', 'moderately active (moderate exercise 3–5 days per week'),
    ('1.725', 'very active (hard exercise 6–7 days per week'),
    ('1.9', 'extra active (very hard exercise, training, or a physical job'),
)


class Profile(models.Model):
    active = models.BooleanField(default=True)
    public = models.BooleanField(default=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    birth = models.DateField(blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    height = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    bmi = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='a')
    workout_lvl = models.CharField(max_length=5, choices=WORKOUT_LVL_CHOICES, default='a')

    def __str__(self):
        return f'Profile - {self.user.username}'

    def get_age(self):
        return 35

    def find_bmi(self):
        return 0

    def find_bmr(self):
        print(self.weight)
        if self.gender == 'a':
            return 66 + (Decimal(6.2) * Decimal(self.weight)) + (Decimal(12.7) * Decimal(self.height)) - (Decimal(6.76) * Decimal(self.get_age()))
        else:
            return 655.1 + (Decimal(4.35) * Decimal(self.weight)) + (Decimal(4.7) * Decimal(self.height)) - (Decimal(4.7)* Decimal(self.get_age()))

    def get_calories(self):
        return Decimal(self.find_bmr()) * Decimal(self.workout_lvl)

    def calories(self):
        return f'{self.get_calories()} cal'

    def tag_gender(self):
        return self.get_gender_display()

    def tag_user(self):
        return self.user.username