module.exports = {
  // 集成的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  roles: {
    // type泛型，表示git提交的type类型必须在以下类型范围之内
    'type-enum': [
      // 当前验证的错误级别 0|1|2 : off|warn|error
      2,
      // 在什么情况下去验证
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
