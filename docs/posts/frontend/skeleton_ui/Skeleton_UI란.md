# Skeleton UI란?

말 그대로 "뼈대"로 실제 contents를 불러와서 화면에 표시하기까지 걸리는 시간동안 사용자에게 앞으로 화면에 보여질 contents의 전반적인 구조를 미리 보여주는 UI입니다.

사용자에게 contents가 준비 중인 상태를 전달하여 UX를 향상시킬 수 있고 페이지 내의 contents가 모두 load될 필요없이 점진적으로 노출시킬 수 있는 효과가 있습니다.

페이지에 먼저 placeholder들을 load하고 데이터가 fetch되는대로 lazy-load하는 간단한 원리를 따라 구현하는 방법은 2가지가 있습니다.

## contents placeholder

페이지에 contents 영역들의 전반적인 구성을 보여주는 placeholder로 실제 contents 데이터가 필요없이 간단하게 구현할 수 있습니다.

Medium, Slack, Youtube 등 서비스의 메인 페이지에서 해당 기법을 사용합니다.

## image(or color) placeholder

웹 페이지에서 이미지를 load하기 전에 보여줄 placeholder로 단색 이미지를 사용하는 방식인데 실제 contents 데이터가 필요하기 때문에 구현과정이 복잡합니다.

Pinterest, Unsplash 등 서비스에서 해당 기법을 사용합니다.
