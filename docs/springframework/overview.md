

# Spring Framework Overview (Spring Framework 概览)
> Version 5.3.8

> `原文：`
> 
> Spring makes it easy to create Java enterprise applications. It provides everything you need to embrace the Java language in an enterprise environment, with support for Groovy and Kotlin as alternative languages on the JVM, and with the flexibility to create many kinds of architectures depending on an application’s needs. As of Spring Framework 5.1, Spring requires JDK 8+ (Java SE 8+) and provides out-of-the-box support for JDK 11 LTS. Java SE 8 update 60 is suggested as the minimum patch release for Java 8, but it is generally recommended to use a recent patch release.
> 
> `译文：`
>
> Spring使我们可以非常容易的去创建Java企业级应用程序。当我们在企业环境中使用Java时，Spring为我们提供了所需要的一切功能。同样，Spring也支持Groovy和Kotlin这些运行在JVM上的语言，我们可以根据应用的需求去灵活的创建多种架构。从Spring Framework 5.1开始，Spring需要 JDK 8+(Java SE 8+)，并且为JDK 11 LTS提供了开箱即用的支持。建议使用 Java SE8 update 60 作为 Java 8的最小补丁版本，但一般建议使用最新的补丁版本

> `原文：`
>
> Spring supports a wide range of application scenarios. In a large enterprise, applications often exist for a long time and have to run on a JDK and application server whose upgrade cycle is beyond developer control. Others may run as a single jar with the server embedded, possibly in a cloud environment. Yet others may be standalone applications (such as batch or integration workloads) that do not need a server.
>
> `译文：`
> 
> Spring支持非常广泛的应用场景。在大型企业，应用通常存在了很长时间，并且必须运行在升级周期不受开发者控制的JDK和应用服务器上。其他的可能以一个内置于服务器的单个jar包运行，可能会运行在云环境上。其他的一些可能会以不需要服务器的独立应用(例如批处理或集成工作负载)运行


> `原文:`
>
> Spring is open source. It has a large and active community that provides continuous feedback based on a diverse range of real-world use cases. This has helped Spring to successfully evolve over a very long time.
> 
> `译文：`
> 
> Spring是开源的。Spring有非常强大和活跃的社区，这个社区能够基于各种各样的实际用例提供持续的反馈。这样的方式能够帮助Spring在很长的一段时间内成功的发展。



# 1. What We Mean by "Spring" (我们所说的Spring是什么意思)

> `原文:`
>
> The term "Spring" means different things in different contexts. It can be used to refer to the Spring Framework project itself, which is where it all started. Over time, other Spring projects have been built on top of the Spring Framework. Most often, when people say "Spring", they mean the entire family of projects. This reference documentation focuses on the foundation: the Spring Framework itself.
>
> `译文:`
>
> 术语 <font face="consolas" color=#3683d6>'Spring'</font> 在不同的上下文中表示不同的含义。在本文档中，<font face="consolas" color=#3683d6>'Spring'</font> 代表着 
<font face="consolas" color=#3683d6>Spring Framework </font>这个项目(一切都是从这里开始的)。随着时间的流逝，其他的Spring项目都是基于<font face="consolas" color=#3683d6>Spring Framework </font>而构建的。在大多数情况下，当人们谈起<font face="consolas" color=#3683d6>"Spring"</font>的时候，他们说的是整个Spring项目家族(<font face="consolas" color=#3683d6>Spring Framework, Spring Boot, Spring Cloud</font> 等等)。本参考文档重点关注Spring项目家族的基础部分：<font face="consolas" color=#3683d6>Spring Framework </font>。

> `原文:`
>
> The Spring Framework is divided into modules. Applications can choose which modules they need. At the heart are the modules of the core container, including a configuration model and a dependency injection mechanism. Beyond that, the Spring Framework provides foundational support for different application architectures, including messaging, transactional data and persistence, and web. It also includes the Servlet-based Spring MVC web framework and, in parallel, the Spring WebFlux reactive web framework.
>
> `译文:`
>
> <font face="consolas">Spring Framework</font> 被划分为多个模块。应用可以根据需要选择自己想要的组件。core container是这些模块的核心，包括配置模型和依赖注入机制。除此之外，<font face="consolas">Spring Framework</font> 为不同的应用体系架构提供了许多基础组件支持，包括消息传递，事务性数据和持久性，以及Web功能支持。它还包括基于Servlet的web框架---Spring MVC，同时他还包括响应式Web框架---Spring WebFlux


> `原文:`
>
> A note about modules: Spring’s framework jars allow for deployment to JDK 9’s module path ("Jigsaw"). For use in Jigsaw-enabled applications, the Spring Framework 5 jars come with "Automatic-Module-Name" manifest entries which define stable language-level module names ("spring.core", "spring.context" etc) independent from jar artifact names (the jars follow the same naming pattern with "-" instead of ".", e.g. "spring-core" and "spring-context"). Of course, Spring’s framework jars keep working fine on the classpath on both JDK 8 and 9+.
>
> `译文:`
> 
> 关于模块的注释：Spring的框架jar包允许部署在JDK9的模块目录下("Jiasaw"). 为了支持Jigsaw应用程序，Spring Framework 5的jars附带了名为"自动模块名称"条目，这个条目定义了与Jar工程无关的语言稳定级别的模块名称(spring-core, spring-context)。当然，Spring框架的jar包可以允许在JDK8和9以上的版本的classpath下运行。

# 2. History of Spring and the Spring Framework (Spring和Spring Framework的发展历史)

> `原文:`
>
> Spring came into being in 2003 as a response to the complexity of the early J2EE specifications. While some consider Java EE and Spring to be in competition, Spring is, in fact, complementary to Java EE. The Spring programming model does not embrace the Java EE platform specification; rather, it integrates with carefully selected individual specifications from the EE umbrella:
> 
> - Servlet API (JSR 340)
> - WebSocket API (JSR 356)
> - Concurrency Utilities (JSR 236)
> - JSON Binding API (JSR 367)
> - Bean Validation (JSR 303)
> - JPA (JSR 338)
> - JMS (JSR 914)
> - as well as JTA/JCA setups for transaction coordination, if necessary.
>
> `翻译:`
>
> 为了解决早期J2EE规范的复杂性，Spring在2003年诞生了。有些人认为Java EE与 Spring是处于竞争状态，但是实际上Spring是对Java EE的补充。Spring编程模型不包含Java EE平台的规范，而是选择性的集成了一些Java EE的单独规则：
>
> - Servlet API (JSR 340)
> - WebSocket API (JSR 356)
> - Concurrency Utilities (JSR 236)
> - JSON Binding API (JSR 367)
> - Bean Validation (JSR 303)
> - JPA (JSR 338)
> - JMS (JSR 914)
> - 以及必要时用于事务协调的JTA/JCA的配置


> `原文:`
> 
> The Spring Framework also supports the Dependency Injection (JSR 330) and Common Annotations (JSR 250) specifications, which application developers may choose to use instead of the Spring-specific mechanisms provided by the Spring Framework.
>
> `翻译:`
>
> Spring Framework 还支持JSR 330的依赖注入注解(例如@Inject)和 JSR250的通用注解规范，这样依赖，Spring应用开发者就可以使用这些注解规范来代替Spring Framework自己提供的注解机制
>
> `解释:`
>
> JSR 250规范提供了@Resource注解，我们可以以如下使用方式来代替@Autowired
> ```java
> @Component
> public class BeanObject {
>     
>     @Resource(name = "master")
>     private Person person;
> }
> ```
> 
> JSR 330规范提供了@Inject注解，我们同样可以以如下使用方式来代替@Autowired
>
> 1. 首先需要引入pom依赖
> ```
> 
> <!-- jsr330 -->
> <dependency>
>    <groupId>javax.inject</groupId>
>    <artifactId>javax.inject</artifactId>
>    <version>1</version>
> </dependency>
> 
> ```
> 2. 然后以如下方式使用@Inject注解
> 
> ```
> @Component
> public class BeanObject {
>     
>     @Inject // 等同于@Autowired
>     @Named("admin") // 等同于@Qualifier
>     private Person master;
> }

> `原文：`
> 
> As of Spring Framework 5.0, Spring requires the Java EE 7 level (e.g. Servlet 3.1+, JPA 2.1+) as a minimum - while at the same time providing out-of-the-box integration with newer APIs at the Java EE 8 level (e.g. Servlet 4.0, JSON Binding API) when encountered at runtime. This keeps Spring fully compatible with e.g. Tomcat 8 and 9, WebSphere 9, and JBoss EAP 7.
>
> `翻译：`
>
> 从 Spring Framework 5.0 开始，Spring对Java EE的最低要求版本为7(例如 Servlet 3.1, JPA 2.1+)。同时在运行时，Spring也提供了对Java EE 8的最新API的开箱即用的集成支持(例如 Servlet 4.0, JSON Binding API)。  这使得Spring能够与Tomcat 8和9，WebSpere 9，JBoss EAP 7 完美兼容。

> `原文：`
>
> Over time, the role of Java EE in application development has evolved. In the early days of Java EE and Spring, applications were created to be deployed to an application server. Today, with the help of Spring Boot, applications are created in a devops- and cloud-friendly way, with the Servlet container embedded and trivial to change. As of Spring Framework 5, a WebFlux application does not even use the Servlet API directly and can run on servers (such as Netty) that are not Servlet containers.
>
> `翻译：`
>
> 随着时间的流逝，Java EE在应用程序开发中的角色早已改变。在早期，Java EE与Spring应用程序只能在被创建后部署在外部应用服务器上。今天，在Spring Boot的帮助下，应用程序以一种对devops和云化非常友好的方式创建，这里在应用程序中嵌入了Servlet容器，并且很容易去修改。随着 Spring Framework 5的发布，它提供的 WebFlux 应用甚至不直接使用 Servlet API，并且可以运行在非Servlet容器上(例如 Netty)

> `原文：`
>
> Spring continues to innovate and to evolve. Beyond the Spring Framework, there are other projects, such as Spring Boot, Spring Security, Spring Data, Spring Cloud, Spring Batch, among others. It’s important to remember that each project has its own source code repository, issue tracker, and release cadence. See spring.io/projects for the complete list of Spring projects.
>
> `翻译：`
>
> Spring社区坚持创新和发展。除了 Spring Framework之外，Spring社区还有其他产品，例如Spring Boot、Spring Data、Spring Cloud、Spring Batch等等。重要的是，我们需要记住每个项目都有它自己的源码仓库，issue跟踪和版本发布节奏。有关Spring相关项目的完整列表，请查看如下链接 spring.io/projects

# 3. Design Philosophy (设计思想)

> `原文：`
>
> When you learn about a framework, it’s important to know not only what it does but what principles it follows. Here are the guiding principles of the Spring Framework:
>
> - Provide choice at every level. Spring lets you defer design decisions as late as possible. For example, you can switch persistence providers through configuration without changing your code. The same is true for many other infrastructure concerns and integration with third-party APIs.
> - Accommodate diverse perspectives. Spring embraces flexibility and is not opinionated about how things should be done. It supports a wide range of application needs with different perspectives.
> - Maintain strong backward compatibility. Spring’s evolution has been carefully managed to force few breaking changes between versions. Spring supports a carefully chosen range of JDK versions and third-party libraries to facilitate maintenance of applications and libraries that depend on Spring.
> - Care about API design. The Spring team puts a lot of thought and time into making APIs that are intuitive and that hold up across many versions and many years.
> - Set high standards for code quality. The Spring Framework puts a strong emphasis on meaningful, current, and accurate javadoc. It is one of very few projects that can claim clean code structure with no circular dependencies between packages.
>
> `翻译：`
>
> 当你学习一个框架的时候，不仅仅是学习框架是干什么的，更重要的是了解框架所遵循的思想。以下是Spring Framework所遵循的思想：
> 
> - 为每个等级都提供选择。Spring可以帮助你尽可能晚的推迟设计决策。例如，你可以切换持久层支持通过修改配置文件而不是修改代码。对于许多其他基础框架的问题和第三方API的集成也是如此。
> - 容纳不同的观点。Spring拥抱灵活性，并且Spring对事情应该如何做并不固执己见。Spring从不同的角度支持广泛的应用程序需求。
> - 保持强大的向后兼容性。为了减少版本之间的破坏性变化，Spring的演变被谨慎的管理。Spring支持精心选择的JDK版本返回和第三方库，以促进依赖于Spring的应用程序和库的维护。
> - 关注API设计。Spring 团队花了大量的思考和时间去让API变得直观易用，并且在许多版本和很多年都适用。
> - 为代码质量设置了高标准。Spring Framework注重有意义的，有时效性的，准确的Javadoc文档。它是极少的可以声明干净的代码，并且没有包之间循环依赖的项目。

# 4. Feedback and Contributions (反馈和贡献)

> `原文：`
>
> For how-to questions or diagnosing or debugging issues, we suggest using Stack Overflow. Click here for a list of the suggested tags to use on Stack Overflow. If you’re fairly certain that there is a problem in the Spring Framework or would like to suggest a feature, please use the GitHub Issues.
>
> `翻译：`
> 
> 对于如何操作问题，诊断，调试问题，我们推荐使用Stack Overflow, 点击这里可以查看在Stack Overflow上建议使用的标签。如果你非常确定Spring Framework有一个问题，或者想提出一些特性，请使用 GitHub Issues。

> `原文：`
> 
> If you have a solution in mind or a suggested fix, you can submit a pull request on Github. However, please keep in mind that, for all but the most trivial issues, we expect a ticket to be filed in the issue tracker, where discussions take place and leave a record for future reference.
>
> `翻译：`
>
> 如果你有解决方案或者建议的解决方案，你可以在GitHub上提交一个 pull request。请注意，除了最琐碎的问题，我们希望你在问题跟踪器中归档一张清单，我们在那里进行讨论并留下记录供将来参考。

> `原文：`
>
> For more details see the guidelines at the CONTRIBUTING, top-level project page.
>
> `翻译：`
> 
> 有关更多细节，请参阅顶层项目页面CONTRIBUTING上的指导方针。

# 5. Getting Started

> `原文：`
> 
> If you are just getting started with Spring, you may want to begin using the Spring Framework by creating a Spring Boot-based application. Spring Boot provides a quick (and opinionated) way to create a production-ready Spring-based application. It is based on the Spring Framework, favors convention over configuration, and is designed to get you up and running as quickly as possible.
>
> `翻译：`
>
> 如果你刚刚开始使用Spring，你可能希望通过创建基于Spring Boot的应用来使用Spring Framework。Spring Boot提供一种快速的方法去创建可用于生产的基于Spring的应用程序。它基于 Spring Framework，它更倾向于约定大于配置，并且它旨在让你尽可能的快速运行程序。

> `原文：`
> 
> You can use start.spring.io to generate a basic project or follow one of the "Getting Started" guides, such as Getting Started Building a RESTful Web Service. As well as being easier to digest, these guides are very task focused, and most of them are based on Spring Boot. They also cover other projects from the Spring portfolio that you might want to consider when solving a particular problem.
>
> 
> `翻译：`
> 
> 您可以通过使用 start.spring.io 去生成一个一个基础项目，或者遵循Getting Started中推荐的方法，例如开始构建RESTful Web服务。这些指南不仅易于理解，而且非常注重任务，并且大多数基于Spring Boot。它们还涵盖了Spring 产品组合中的其他项目，您在解决一些特定的问题时，可能需要考虑使用这些项目。
