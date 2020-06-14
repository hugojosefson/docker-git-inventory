import _ from 'highland'

export default () =>
  _([
    {
      serviceId: '4b8jzwq1euz9mi3sxjm8xoe8s',
      image:
        'docker-registry.example.com/someservice:master@sha256:66ebcc363fbd96ef90068d0a08d5400cb279851f86b6a1d2785c283bbbf953aa',
      stack: 'name-of-stack',
      serviceNameLong: 'name-of-stack_someservice',
      taskId: 'zuo23m2lbb9u',
      serviceName: 'someservice',
      labels: {
        milieu: 'local',
        GIT_URL: 'https://github.com/mygithubaccount/someservice.git',
        GIT_BRANCH: 'master',
        GIT_COMMIT: 'a1937ff9195ecb7d225847a75e0a2c31f513bc15',
        VERSION: 'master-28',
        'com.docker.stack.image':
          'docker-registry.example.com/someservice:master',
        'com.docker.stack.namespace': 'name-of-stack',
        'traefik.base.frontend.rule': 'Host:someservice.local.example.com',
      },
    },
    {
      serviceId: '6h3k37f4748shj6zxp8nqx1jh',
      image:
        'mysql/mysql-server:5.7@sha256:66ebcc363fbd96ef90068d0a08d5400cb279851f86b6a1d2785c283bbbf953aa',
      stack: 'name-of-stack',
      serviceNameLong: 'name-of-stack_codename-mysql',
      taskId: 'prdm30cro4dg',
      serviceName: 'codename-mysql',
      labels: {
        milieu: 'local',
        'com.docker.stack.image': 'mysql/mysql-server:5.7',
        'com.docker.stack.namespace': 'name-of-stack',
      },
    },
    {
      serviceId: '4q4hup5azbufx59zq66w3jpwr',
      image:
        'docker-registry.example.com/otherservice:master@sha256:66ebcc363fbd96ef90068d0a08d5400cb279851f86b6a1d2785c283bbbf953aa',
      stack: 'name-of-stack',
      serviceNameLong: 'name-of-stack_otherservice-somealternative',
      taskId: 'xw17ejt0vst6',
      serviceName: 'otherservice-somealternative',
      labels: {
        milieu: 'local',
        GIT_URL: 'https://github.com/mygithubaccount/otherservice.git',
        GIT_BRANCH: 'master',
        GIT_COMMIT: 'f3905fb519d1f304eca156ae7caf0e12575a108f',
        VERSION: 'master-109',
        'com.docker.stack.image':
          'docker-registry.example.com/otherservice:master',
        'com.docker.stack.namespace': 'name-of-stack',
        'traefik.base.frontend.rule':
          'Host:otherservice-somealternative.local.example.com',
      },
    },
    {
      serviceId: '4q4hup5azbufx59zq66w3jpwr',
      image:
        'docker-registry.example.com/otherservice:master@sha256:66ebcc363fbd96ef90068d0a08d5400cb279851f86b6a1d2785c283bbbf953aa',
      stack: 'name-of-stack',
      serviceNameLong: 'name-of-stack_otherservice-somealternative',
      taskId: 'xw17ejt0vst6',
      serviceName: 'otherservice-somealternative',
      labels: {
        milieu: 'local',
        GIT_URL: 'https://github.com/mygithubaccount/otherasdservice.git',
        GIT_BRANCH: 'master',
        GIT_COMMIT: 'f3905fb519d1f304eca156ae7caf0e12575a108f',
        VERSION: 'master-109',
        'com.docker.stack.image':
          'docker-registry.example.com/otherservice:master',
        'com.docker.stack.namespace': 'name-of-stack',
        'traefik.base.frontend.rule':
          'Host:otherservice-somealternative.local.example.com',
      },
    },
    {
      serviceId: 'rxufwkw5iozu8lwgdb7pf7h1p',
      image:
        'docker-registry.example.com/codename-backend:docker@sha256:66ebcc363fbd96ef90068d0a08d5400cb279851f86b6a1d2785c283bbbf953aa',
      stack: 'name-of-stack',
      serviceNameLong: 'name-of-stack_codename-backend',
      taskId: 'ky300r66gu4m',
      serviceName: 'codename-backend',
      labels: {
        milieu: 'local',
        GIT_URL: 'https://github.com/mygithubaccount/codename-backend.git',
        GIT_BRANCH: 'docker',
        GIT_COMMIT: '9ce168a43e17809a8a01e5fe821bda677d96f5cd',
        VERSION: 'docker-121',
        'com.docker.stack.image':
          'docker-registry.example.com/codename-backend:docker',
        'com.docker.stack.namespace': 'name-of-stack',
        'traefik.backend.loadbalancer.stickiness': 'true',
        'traefik.base.frontend.rule': 'Host:codename-backend.local.example.com',
      },
    },
    {
      serviceId: 'ukivcncfznuz779zfl5a8faz5',
      image:
        'redis:5-alpine@sha256:66ebcc363fbd96ef90068d0a08d5400cb279851f86b6a1d2785c283bbbf953aa',
      stack: 'name-of-stack',
      serviceNameLong: 'name-of-stack_codename-redis',
      taskId: 'znmuivv7vnqr',
      serviceName: 'codename-redis',
      labels: {
        milieu: 'local',
        'com.docker.stack.image': 'redis:5-alpine',
        'com.docker.stack.namespace': 'name-of-stack',
      },
    },
  ])
