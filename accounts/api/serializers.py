from rest_framework import serializers

from ..models import Profile, User


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['id', 'public', 'user', 'tag_user',
                  'birth', 'weight', 'height', 'bmi',
                  'gender', 'workout_lvl', 'tag_gender',
                  'calories'

                  ]


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'id', 'email']
