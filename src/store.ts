// import { reactive } from 'vue';



function initState(){
  const data = [
    {
      questionNo: 0,
      questionText:
        'You are working as a Solutions Architect in a top software development company in Silicon Valley. The company has multiple applications hosted in their VPC. While you are monitoring the system, you noticed that multiple port scans are coming in from a specific IP address block which are trying to connect to several AWS resources inside your VPC. The internal security team has requested that all offending IP addresses be denied for the next 24 hours for security purposes.\n\nWhich of the following is the best method to quickly and temporarily deny access from the specified IP addresses?',
      options: [
        {
          isCorrect: false,
          text:
            '​\nCreate a policy in IAM to deny access from the IP Address block.',
        },
        {
          isCorrect: true,
          text:
            '​\nModify the Network Access Control List associated with all public subnets in the VPC to deny access from the IP Address block.\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\nConfigure the firewall in the operating system of the EC2 instances to deny access from the IP address block.',
        },
        {
          isCorrect: false,
          text:
            '​\nAdd a rule in the Security Group of the EC2 instances to deny access from the IP Address block.',
        },
      ],
      explain:
        'Explanation\n\nTo control the traffic coming in and out of your VPC network, you can use the network access control list (ACL). It is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. This is the best solution among other options as you can easily add and remove the restriction in a matter of minutes.\n\nCreating a policy in IAM to deny access from the IP Address block is incorrect as an IAM policy does not control the inbound and outbound traffic of your VPC.\n\nAdding a rule in the Security Group of the EC2 instances to deny access from the IP Address block is incorrect as although a Security Group acts as a firewall, it will only control both inbound and outbound traffic at the instance level and not on the whole VPC.\n\nConfiguring the firewall in the operating system of the EC2 instances to deny access from the IP address block is incorrect because adding a firewall in the underlying operating system of the EC2 instance is not enough; the attacker can just connect to other AWS resources since the network access control list still allows them to do so.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/',
    },
    {
      questionNo: 1,
      questionText:
        'An online medical system hosted in AWS stores sensitive Personally Identifiable Information (PII) of the users in an Amazon S3 bucket. Both the master keys and the unencrypted data should never be sent to AWS to comply with the strict compliance and regulatory requirements of the company.\n\nWhich S3 encryption technique should the Architect use?',
      options: [
        {
          isCorrect: true,
          text:
            '​\n\nUse S3 client-side encryption with a client-side master key.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nUse S3 server-side encryption with a KMS managed key.',
        },
        {
          isCorrect: false,
          text: '​\n\nUse S3 server-side encryption with customer provided key.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse S3 client-side encryption with a KMS-managed customer master key.\n\n',
        },
      ],
      explain:
        "Explanation\n\nClient-side encryption is the act of encrypting data before sending it to Amazon S3. To enable client-side encryption, you have the following options:\n\n- Use an AWS KMS-managed customer master key.\n\n- Use a client-side master key.\n\n\n\n\nWhen using an AWS KMS-managed customer master key to enable client-side data encryption, you provide an AWS KMS customer master key ID (CMK ID) to AWS. On the other hand, when you use client-side master key for client-side data encryption, your client-side master keys and your unencrypted data are never sent to AWS. It's important that you safely manage your encryption keys because if you lose them, you can't decrypt your data.\n\n\n\n\n\n\n\nThis is how client-side encryption using client-side master key works:\n\nWhen uploading an object - You provide a client-side master key to the Amazon S3 encryption client. The client uses the master key only to encrypt the data encryption key that it generates randomly. The process works like this:\n\n1. The Amazon S3 encryption client generates a one-time-use symmetric key (also known as a data encryption key or data key) locally. It uses the data key to encrypt the data of a single Amazon S3 object. The client generates a separate data key for each object.\n\n2. The client encrypts the data encryption key using the master key that you provide. The client uploads the encrypted data key and its material description as part of the object metadata. The client uses the material description to determine which client-side master key to use for decryption.\n\n3. The client uploads the encrypted data to Amazon S3 and saves the encrypted data key as object metadata (x-amz-meta-x-amz-key) in Amazon S3.\n\n\n\n\nWhen downloading an object - The client downloads the encrypted object from Amazon S3. Using the material description from the object's metadata, the client determines which master key to use to decrypt the data key. The client uses that master key to decrypt the data key and then uses the data key to decrypt the object.\n\nHence, the correct answer is to use S3 client-side encryption with a client-side master key.\n\nUsing S3 client-side encryption with a KMS-managed customer master key is incorrect because in client-side encryption with a KMS-managed customer master key, you provide an AWS KMS customer master key ID (CMK ID) to AWS. The scenario clearly indicates that both the master keys and the unencrypted data should never be sent to AWS.\n\nUsing S3 server-side encryption with a KMS managed key is incorrect because the scenario mentioned that the unencrypted data should never be sent to AWS, which means that you have to use client-side encryption in order to encrypt the data first before sending to AWS. In this way, you can ensure that there is no unencrypted data being uploaded to AWS. In addition, the master key used by Server-Side Encryption with AWS KMS–Managed Keys (SSE-KMS) is uploaded and managed by AWS, which directly violates the requirement of not uploading the master key.\n\nUsing S3 server-side encryption with customer provided key is incorrect because just as mentioned above, you have to use client-side encryption in this scenario instead of server-side encryption. For the S3 server-side encryption with customer-provided key (SSE-C), you actually provide the encryption key as part of your request to upload the object to S3. Using this key, Amazon S3 manages both the encryption (as it writes to disks) and decryption (when you access your objects).\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html",
    },
    {
      questionNo: 2,
      questionText:
        "A popular social media website uses a CloudFront web distribution to serve their static contents to their millions of users around the globe. They are receiving a number of complaints recently that their users take a lot of time to log into their website. There are also occasions when their users are getting HTTP 504 errors. You are instructed by your manager to significantly reduce the user's login time to further optimize the system.\n\nWhich of the following options should you use together to set up a cost-effective solution that can improve your application's performance? (Select TWO.)",
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nConfigure your origin to add a Cache-Control max-age directive to your objects, and specify the longest practical value for max-age to increase the cache hit ratio of your CloudFront distribution.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCustomize the content that the CloudFront web distribution delivers to your users using Lambda@Edge, which allows your Lambda functions to execute the authentication process in AWS locations closer to the users.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse multiple and geographically disperse VPCs to various AWS regions then create a transit VPC to connect all of your resources. In order to handle the requests faster, set up Lambda functions in each region using the AWS Serverless Application Model (SAM) service.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nSet up an origin failover by creating an origin group with two origins. Specify one as the primary origin and the other as the second origin which CloudFront automatically switches to when the primary origin returns specific HTTP status code failure responses.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nDeploy your application to multiple AWS regions to accommodate your users around the world. Set up a Route 53 record with latency routing policy to route incoming traffic to the region that provides the best latency to the user.',
        },
      ],
      explain:
        'Explanation\n\nLambda@Edge lets you run Lambda functions to customize the content that CloudFront delivers, executing the functions in AWS locations closer to the viewer. The functions run in response to CloudFront events, without provisioning or managing servers. You can use Lambda functions to change CloudFront requests and responses at the following points:\n\n- After CloudFront receives a request from a viewer (viewer request)\n\n- Before CloudFront forwards the request to the origin (origin request)\n\n- After CloudFront receives the response from the origin (origin response)\n\n- Before CloudFront forwards the response to the viewer (viewer response)\n\n\n\n\n\n\n\nIn the given scenario, you can use Lambda@Edge to allow your Lambda functions to customize the content that CloudFront delivers and to execute the authentication process in AWS locations closer to the users. In addition, you can set up an origin failover by creating an origin group with two origins with one as the primary origin and the other as the second origin which CloudFront automatically switches to when the primary origin fails. This will alleviate the occasional HTTP 504 errors that users are experiencing. Therefore, the correct answers are:\n\n- Customize the content that the CloudFront web distribution delivers to your users using Lambda@Edge, which allows your Lambda functions to execute the authentication process in AWS locations closer to the users.\n\n- Set up an origin failover by creating an origin group with two origins. Specify one as the primary origin and the other as the second origin which CloudFront automatically switches to when the primary origin returns specific HTTP status code failure responses.\n\nThe option that says: Use multiple and geographically disperse VPCs to various AWS regions then create a transit VPC to connect all of your resources. In order to handle the requests faster, set up Lambda functions in each region using the AWS Serverless Application Model (SAM) service is incorrect because of the same reason provided above. Although setting up multiple VPCs across various regions which are connected with a transit VPC is valid, this solution still entails higher setup and maintenance costs. A more cost-effective option would be to use Lambda@Edge instead.\n\nThe option that says: Configure your origin to add a Cache-Control max-age directive to your objects, and specify the longest practical value for max-age to increase the cache hit ratio of your CloudFront distribution is incorrect because improving the cache hit ratio for the CloudFront distribution is irrelevant in this scenario. You can improve your cache performance by increasing the proportion of your viewer requests that are served from CloudFront edge caches instead of going to your origin servers for content. However, take note that the problem in the scenario is the sluggish authentication process of your global users and not just the caching of the static objects.\n\nThe option that says: Deploy your application to multiple AWS regions to accommodate your users around the world. Set up a Route 53 record with latency routing policy to route incoming traffic to the region that provides the best latency to the user is incorrect because although this may resolve the performance issue, this solution entails a significant implementation cost since you have to deploy your application to multiple AWS regions. Remember that the scenario asks for a solution that will improve the performance of the application with minimal cost.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html\n\n\n\n\nCheck out these Amazon CloudFront and AWS Lambda Cheat Sheets:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudfront/\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-lambda/',
    },
    {
      questionNo: 3,
      questionText:
        'There are many clients complaining that the online trading application of an investment bank is always down. Your manager instructed you to re-design the architecture of the application to prevent the unnecessary service interruptions. To ensure high availability, you set up the application to use an ELB to distribute the incoming requests across an auto-scaled group of EC2 instances in two single Availability Zones. The Auto Scaling group is configured with default settings.\n\nIn this scenario, what happens when an EC2 instance behind an ELB fails a health check?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nThe EC2 instance will automatically be deregistered from the default Placement Group.',
        },
        {
          isCorrect: false,
          text: '​\nThe EC2 instance is replaced automatically by the ELB.',
        },
        {
          isCorrect: true,
          text: '​\nThe ELB stops sending traffic to the EC2 instance\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\nThe EC2 instance gets terminated automatically by the ELB.',
        },
      ],
      explain:
        "Explanation\n\nIn this scenario, the load balancer will route the incoming requests only to the healthy instances. When the load balancer determines that an instance is unhealthy, it stops routing requests to that instance. The load balancer resumes routing requests to the instance when it has been restored to a healthy state.\n\nThere are two ways of checking the status of your EC2 instances:\n\n1. Via the Auto Scaling group\n\n2. Via the ELB health checks\n\n \n\nThe default health checks for an Auto Scaling group are EC2 status checks only. If an instance fails these status checks, the Auto Scaling group considers the instance unhealthy and replaces. If you attached one or more load balancers or target groups to your Auto Scaling group, the group does not, by default, consider an instance unhealthy and replace it if it fails the load balancer health checks.\n\nHowever, you can optionally configure the Auto Scaling group to use Elastic Load Balancing health checks. This ensures that the group can determine an instance's health based on additional tests provided by the load balancer. The load balancer periodically sends pings, attempts connections, or sends requests to test the EC2 instances. These tests are called health checks.\n\nIf you configure the Auto Scaling group to use Elastic Load Balancing health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks. If you attach multiple load balancers to an Auto Scaling group, all of them must report that the instance is healthy in order for it to consider the instance healthy. If one load balancer reports an instance as unhealthy, the Auto Scaling group replaces the instance, even if other load balancers report it as healthy.\n\n \n\n \n\nThe scenario said that the Auto Scaling group is configured with default settings. This means that it is using the EC2 health check type. Hence, the correct answer is: The ELB stops sending traffic to the EC2 instance.\n\nThe option that says: The EC2 instance gets terminated automatically by the ELB is incorrect because this action will not be done by ELB. \n\nThe option that says: The EC2 instance will automatically be deregistered from the default Placement Group is incorrect because in the first place, an EC2 instance is not associated with a Placement Group by default. A Placement group is simply a logical placement of a group of interdependent EC2 instances to meet the low-latency network performance needs of your workload.\n\nThe option that says: The EC2 instance is replaced automatically by the ELB is incorrect because the scenario clearly states that the Auto Scaling group is configured with default settings. The default health check type is the EC2 checks, which means that the ELB will stop sending traffic to the EC2 instance.\n\n \n\nReferences:\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html\n\n \n\nCheck out this AWS Elastic Load Balancing (ELB) Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-elastic-load-balancing-elb/\n\n \n\nEC2 Instance Health Check vs ELB Health Check vs Auto Scaling and Custom Health Check:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-ec2-instance-health-check-vs-elb-health-check-vs-auto-scaling-and-custom-health-check-2/\n\n \n\nHere is an additional training material on why an Amazon EC2 Auto Scaling group terminates a healthy instance:\n\nhttps://youtu.be/_ew-J3DQKZg",
    },
    {
      questionNo: 4,
      questionText:
        "A popular mobile game uses CloudFront, Lambda, and DynamoDB for its backend services. The player data is persisted on a DynamoDB table and the static assets are distributed by CloudFront. However, there are a lot of complaints that saving and retrieving player information is taking a lot of time.   \n\nTo improve the game's performance, which AWS service can you use to reduce DynamoDB response times from milliseconds to microseconds?",
      options: [
        {
          isCorrect: false,
          text: '​\n\nAmazon ElastiCache',
        },
        {
          isCorrect: false,
          text: '​\n\nDynamoDB Auto Scaling',
        },
        {
          isCorrect: true,
          text: '​\n\nAmazon DynamoDB Accelerator (DAX)\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nAWS Device Farm',
        },
      ],
      explain:
        'Explanation\n\nAmazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache that can reduce Amazon DynamoDB response times from milliseconds to microseconds, even at millions of requests per second.\n\nAmazon ElastiCache is incorrect because although you may use ElastiCache as your database cache, it will not reduce the DynamoDB response time from milliseconds to microseconds as compared with DynamoDB DAX.\n\nAWS Device Farm is incorrect because this is an app testing service that lets you test and interact with your Android, iOS, and web apps on many devices at once, or reproduce issues on a device in real time.\n\nDynamoDB Auto Scaling is incorrect because this is primarily used to automate capacity management for your tables and global secondary indexes.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/dynamodb/dax\n\nhttps://aws.amazon.com/device-farm\n\n\n\n\nCheck out this Amazon DynamoDB Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-dynamodb/',
    },
    {
      questionNo: 5,
      questionText:
        'An online cryptocurrency exchange platform is hosted in AWS which uses ECS Cluster and RDS in Multi-AZ Deployments configuration. The application is heavily using the RDS instance to process complex read and write database operations. To maintain the reliability, availability, and performance of your systems, you have to closely monitor how the different processes or threads on a DB instance use the CPU, including the percentage of the CPU bandwidth and total memory consumed by each process.   \n\nWhich of the following is the most suitable solution to properly monitor your database?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nUse Amazon CloudWatch to monitor the CPU Utilization of your database.',
        },
        {
          isCorrect: true,
          text: '​\n\nEnable Enhanced Monitoring in RDS.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCheck the CPU% and MEM% metrics which are readily available in the Amazon RDS console that shows the percentage of the CPU bandwidth and total memory consumed by each database process of your RDS instance.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCreate a script that collects and publishes custom metrics to CloudWatch, which tracks the real-time CPU Utilization of the RDS instance, and then set up a custom CloudWatch dashboard to view the metrics.',
        },
      ],
      explain:
        'Explanation\n\nAmazon RDS provides metrics in real time for the operating system (OS) that your DB instance runs on. You can view the metrics for your DB instance using the console, or consume the Enhanced Monitoring JSON output from CloudWatch Logs in a monitoring system of your choice. By default, Enhanced Monitoring metrics are stored in the CloudWatch Logs for 30 days. To modify the amount of time the metrics are stored in the CloudWatch Logs, change the retention for the RDSOSMetrics log group in the CloudWatch console.\n\nTake note that there are certain differences between CloudWatch and Enhanced Monitoring Metrics. CloudWatch gathers metrics about CPU utilization from the hypervisor for a DB instance, and Enhanced Monitoring gathers its metrics from an agent on the instance. As a result, you might find differences between the measurements, because the hypervisor layer performs a small amount of work. Hence, enabling Enhanced Monitoring in RDS is the correct answer in this specific scenario.\n\nThe differences can be greater if your DB instances use smaller instance classes, because then there are likely more virtual machines (VMs) that are managed by the hypervisor layer on a single physical instance. Enhanced Monitoring metrics are useful when you want to see how different processes or threads on a DB instance use the CPU.\n\n\n\n\n\n\n\nUsing Amazon CloudWatch to monitor the CPU Utilization of your database is incorrect because although you can use this to monitor the CPU Utilization of your database instance, it does not provide the percentage of the CPU bandwidth and total memory consumed by each database process in your RDS instance. Take note that CloudWatch gathers metrics about CPU utilization from the hypervisor for a DB instance while RDS Enhanced Monitoring gathers its metrics from an agent on the instance.\n\nThe option that says: Create a script that collects and publishes custom metrics to CloudWatch, which tracks the real-time CPU Utilization of the RDS instance and then set up a custom CloudWatch dashboard to view the metrics is incorrect because although you can use Amazon CloudWatch Logs and CloudWatch dashboard to monitor the CPU Utilization of the database instance, using CloudWatch alone is still not enough to get the specific percentage of the CPU bandwidth and total memory consumed by each database processes. The data provided by CloudWatch is not as detailed as compared with the Enhanced Monitoring feature in RDS. Take note as well that you do not have direct access to the instances/servers of your RDS database instance, unlike with your EC2 instances where you can install a CloudWatch agent or a custom script to get CPU and memory utilization of your instance.\n\nThe option that says: Check the CPU% and MEM% metrics which are readily available in the Amazon RDS console that shows the percentage of the CPU bandwidth and total memory consumed by each database process of your RDS instance is incorrect because the CPU% and MEM% metrics are not readily available in the Amazon RDS console, which is contrary to what is being stated in this option.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.CloudWatchLogs\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html#monitoring-cloudwatch\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/',
    },
    {
      questionNo: 6,
      questionText:
        'There are a lot of outages in the Availability Zone of your RDS database instance to the point that you have lost access to the database. What could you do to prevent losing access to your database in case that this event happens again?',
      options: [
        {
          isCorrect: false,
          text: '​\nMake a snapshot of the database',
        },
        {
          isCorrect: false,
          text: '​\nCreate a read replica',
        },
        {
          isCorrect: true,
          text: '​\nEnabled Multi-AZ failover\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\nIncrease the database instance size',
        },
      ],
      explain:
        "Explanation\n\nAmazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. For this scenario, enabling Multi-AZ failover is the correct answer. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable.\n\n\n\n\n\n\n\nIn case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete.\n\nMaking a snapshot of the database allows you to have a backup of your database, but it does not provide immediate availability in case of AZ failure. So this is incorrect.\n\nIncreasing the database instance size is not a solution for this problem. Doing this action addresses the need to upgrade your compute capacity but does not solve the requirement of providing access to your database even in the event of a loss of one of the Availability Zones.\n\nCreating a read replica is incorrect because this simply provides enhanced performance for read-heavy database workloads. Although you can promote a read replica, its asynchronous replication might not provide you the latest version of your database.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/\n\n\n\n\nTutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-certified-solutions-architect-associate/",
    },
    {
      questionNo: 7,
      questionText:
        "A popular social network is hosted in AWS and is using a DynamoDB table as its database. There is a requirement to implement a 'follow' feature where users can subscribe to certain updates made by a particular user and be notified via email. Which of the following is the most suitable solution that you should implement to meet the requirement?",
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nUsing the Kinesis Client Library (KCL), write an application that leverages on DynamoDB Streams Kinesis Adapter that will fetch data from the DynamoDB Streams endpoint. When there are updates made by a particular user, notify the subscribers via email using SNS.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCreate a Lambda function that uses DynamoDB Streams Kinesis Adapter which will fetch data from the DynamoDB Streams endpoint. Set up an SNS Topic that will notify the subscribers via email when there is an update made by a particular user.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up a DAX cluster to access the source DynamoDB table. Create a new DynamoDB trigger and a Lambda function. For every update made in the user data, the trigger will send data to the Lambda function which will then notify the subscribers via email using SNS.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nEnable DynamoDB Stream and create an AWS Lambda trigger, as well as the IAM role which contains all of the permissions that the Lambda function will need at runtime. The data from the stream record will be processed by the Lambda function which will then publish a message to SNS Topic that will notify the subscribers via email.\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nA DynamoDB stream is an ordered flow of information about changes to items in an Amazon DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.\n\nWhenever an application creates, updates, or deletes items in the table, DynamoDB Streams writes a stream record with the primary key attribute(s) of the items that were modified. A stream record contains information about a data modification to a single item in a DynamoDB table. You can configure the stream so that the stream records capture additional information, such as the "before" and "after" images of modified items.\n\nAmazon DynamoDB is integrated with AWS Lambda so that you can create triggers—pieces of code that automatically respond to events in DynamoDB Streams. With triggers, you can build applications that react to data modifications in DynamoDB tables.\n\nIf you enable DynamoDB Streams on a table, you can associate the stream ARN with a Lambda function that you write. Immediately after an item in the table is modified, a new record appears in the table\'s stream. AWS Lambda polls the stream and invokes your Lambda function synchronously when it detects new stream records. The Lambda function can perform any actions you specify, such as sending a notification or initiating a workflow.\n\nHence, the correct answer in this scenario is the option that says: Enable DynamoDB Stream and create an AWS Lambda trigger, as well as the IAM role which contains all of the permissions that the Lambda function will need at runtime. The data from the stream record will be processed by the Lambda function which will then publish a message to SNS Topic that will notify the subscribers via email.\n\n\n\n\n\n\n\nThe option that says: Using the Kinesis Client Library (KCL), write an application that leverages on DynamoDB Streams Kinesis Adapter that will fetch data from the DynamoDB Streams endpoint. When there are updates made by a particular user, notify the subscribers via email using SNS is incorrect because although this is a valid solution, it is missing a vital step which is to enable DynamoDB Streams. With the DynamoDB Streams Kinesis Adapter in place, you can begin developing applications via the KCL interface, with the API calls seamlessly directed at the DynamoDB Streams endpoint. Remember that the DynamoDB Stream feature is not enabled by default.\n\nThe option that says: Create a Lambda function that uses DynamoDB Streams Kinesis Adapter which will fetch data from the DynamoDB Streams endpoint. Set up an SNS Topic that will notify the subscribers via email when there is an update made by a particular user is incorrect because just like in the above, you have to manually enable DynamoDB Streams first before you can use its endpoint.\n\nThe option that says: Set up a DAX cluster to access the source DynamoDB table. Create a new DynamoDB trigger and a Lambda function. For every update made in the user data, the trigger will send data to the Lambda function which will then notify the subscribers via email using SNS is incorrect because the DynamoDB Accelerator (DAX) feature is primarily used to significantly improve the in-memory read performance of your database, and not to capture the time-ordered sequence of item-level modifications. You should use DynamoDB Streams in this scenario instead.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html\n\n\n\n\nCheck out this Amazon DynamoDB Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-dynamodb/',
    },
    {
      questionNo: 8,
      questionText:
        'A newly hired Solutions Architect is assigned to manage a set of CloudFormation templates that is used in the company\'s cloud architecture in AWS. The Architect accessed the templates and tried to analyze the configured IAM policy for an S3 bucket.\n\n\n\n\n{\n "Version": "2012-10-17",\n "Statement": [\n {\n "Effect": "Allow",\n "Action": [\n "s3:Get*",\n "s3:List*"\n ],\n "Resource": "*"\n },\n {\n "Effect": "Allow",\n "Action": "s3:PutObject",\n "Resource": "arn:aws:s3:::tutorialsdojo/*"\n }\n ]\n}\n\n\n\n\nWhat does the above IAM policy allow? (Select THREE.)',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nAn IAM user with this IAM policy is allowed to change access rights for the tutorialsdojo S3 bucket.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nAn IAM user with this IAM policy is allowed to read and delete objects from the tutorialsdojo S3 bucket.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nAn IAM user with this IAM policy is allowed to read objects from all S3 buckets owned by the account.\n\n(Correct)',
        },
        {
          isCorrect: true,
          text:
            '​\n\nAn IAM user with this IAM policy is allowed to write objects into the tutorialsdojo S3 bucket.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nAn IAM user with this IAM policy is allowed to read objects in the tutorialsdojo S3 bucket but not allowed to list the objects in the bucket.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nAn IAM user with this IAM policy is allowed to read objects from the tutorialsdojo S3 bucket.\n\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nYou manage access in AWS by creating policies and attaching them to IAM identities (users, groups of users, or roles) or AWS resources. A policy is an object in AWS that, when associated with an identity or resource, defines their permissions. AWS evaluates these policies when an IAM principal (user or role) makes a request. Permissions in the policies determine whether the request is allowed or denied. Most policies are stored in AWS as JSON documents. AWS supports six types of policies: identity-based policies, resource-based policies, permissions boundaries, AWS Organizations SCPs, ACLs, and session policies.\n\nIAM policies define permissions for an action regardless of the method that you use to perform the operation. For example, if a policy allows the GetUser action, then a user with that policy can get user information from the AWS Management Console, the AWS CLI, or the AWS API. When you create an IAM user, you can choose to allow console or programmatic access. If console access is allowed, the IAM user can sign in to the console using a user name and password. Or if programmatic access is allowed, the user can use access keys to work with the CLI or API.\n\n\n\n\n\n\n\nBased on the provided IAM policy, the user is only allowed to get, write and list all of the objects for the 'tutorialsdojo' s3 bucket. The s3:PutObject basically means that you can submit a PUT object request to the S3 bucket to store data.\n\nHence, the correct answers are:\n\n- An IAM user with this IAM policy is allowed to read objects from all S3 buckets owned by the account.\n\n- An IAM user with this IAM policy is allowed to write objects into the 'tutorialsdojo' S3 bucket.\n\n- An IAM user with this IAM policy is allowed to read objects from the 'tutorialsdojo' S3 bucket.\n\n\n\n\nThe option that says: An IAM user with this IAM policy is allowed to change access rights for the 'tutorialsdojo' S3 bucket is incorrect because the template does not have any statements which allow the user to change access rights in the bucket.\n\nThe option that says: An IAM user with this IAM policy is allowed to read objects in the 'tutorialsdojo' S3 bucket but not allowed to list the objects in the bucket is incorrect because it can clearly be seen in the template the there is a s3:Get* which permits the user to list objects.\n\nThe option that says: An IAM user with this IAM policy is allowed to read and delete objects from the 'tutorialsdojo' S3 bucket is incorrect because although you can read objects from the bucket, you cannot delete any objects.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectOps.html\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/",
    },
    {
      questionNo: 9,
      questionText:
        'A startup based in Australia is deploying a new two-tier web application in AWS. The Australian company wants to store their most frequently used data in an in-memory data store to improve the retrieval and response time of their web application.   \n\nWhich of the following is the most suitable service to be used for this requirement?',
      options: [
        {
          isCorrect: true,
          text: '​\nAmazon ElastiCache\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nDynamoDB',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon Redshift',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon RDS',
        },
      ],
      explain:
        'Explanation\n\nAmazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.\n\n\n\n\n\n\n\nDynamoDB is incorrect because this is primarily used as a NoSQL database which supports both document and key-value store models. ElastiCache is a more suitable service to use than DynamoDB, if you need an in-memory data store.\n\nAmazon RDS is incorrect because this is mainly used as a relational database and not as a data storage for frequently used data.\n\nAmazon Redshift is incorrect because this is a data warehouse service and is not suitable to be used as an in-memory data store.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/elasticache/\n\nhttps://aws.amazon.com/products/databases/\n\n\n\n\nCheck out this Amazon Elasticache Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elasticache/',
    },
    {
      questionNo: 10,
      questionText:
        "A retail website has intermittent, sporadic, and unpredictable transactional workloads throughout the day that are hard to predict. The website is currently hosted on-premises and is slated to be migrated to AWS. A new relational database is needed that autoscales capacity to meet the needs of the application's peak load and scales back down when the surge of activity is over.\n\nWhich of the following option is the MOST cost-effective and suitable database setup in this scenario?",
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nLaunch an Amazon Aurora Provisioned DB cluster with burstable performance DB instance class types.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nLaunch an Amazon Redshift data warehouse cluster with Concurrency Scaling.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nLaunch an Amazon Aurora Serverless DB cluster then set the minimum and maximum capacity for the cluster.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nLaunch a DynamoDB Global table with Auto Scaling enabled.',
        },
      ],
      explain:
        "Explanation\n\nAmazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. An Aurora Serverless DB cluster is a DB cluster that automatically starts up, shuts down, and scales up or down its compute capacity based on your application's needs. Aurora Serverless provides a relatively simple, cost-effective option for infrequent, intermittent, sporadic or unpredictable workloads. It can provide this because it automatically starts up, scales compute capacity to match your application's usage and shuts down when it's not in use.\n\nTake note that a non-Serverless DB cluster for Aurora is called a provisioned DB cluster. Aurora Serverless clusters and provisioned clusters both have the same kind of high-capacity, distributed, and highly available storage volume.\n\nWhen you work with Amazon Aurora without Aurora Serverless (provisioned DB clusters), you can choose your DB instance class size and create Aurora Replicas to increase read throughput. If your workload changes, you can modify the DB instance class size and change the number of Aurora Replicas. This model works well when the database workload is predictable, because you can adjust capacity manually based on the expected workload.\n\nHowever, in some environments, workloads can be intermittent and unpredictable. There can be periods of heavy workloads that might last only a few minutes or hours, and also long periods of light activity, or even no activity. Some examples are retail websites with intermittent sales events, reporting databases that produce reports when needed, development and testing environments, and new applications with uncertain requirements. In these cases and many others, it can be difficult to configure the correct capacity at the right times. It can also result in higher costs when you pay for capacity that isn't used.\n\n\n\n\n\n\n\nWith Aurora Serverless , you can create a database endpoint without specifying the DB instance class size. You set the minimum and maximum capacity. With Aurora Serverless, the database endpoint connects to a proxy fleet that routes the workload to a fleet of resources that are automatically scaled. Because of the proxy fleet, connections are continuous as Aurora Serverless scales the resources automatically based on the minimum and maximum capacity specifications. Database client applications don't need to change to use the proxy fleet. Aurora Serverless manages the connections automatically. Scaling is rapid because it uses a pool of \"warm\" resources that are always ready to service requests. Storage and processing are separate, so you can scale down to zero processing and pay only for storage.\n\nAurora Serverless introduces a new serverless DB engine mode for Aurora DB clusters. Non-Serverless DB clusters use the provisioned DB engine mode.\n\nHence, the correct answer is: Launch an Amazon Aurora Serverless DB cluster then set the minimum and maximum capacity for the cluster.\n\nThe option that says: Launch an Amazon Aurora Provisioned DB cluster with burstable performance DB instance class types is incorrect because an Aurora Provisioned DB cluster is not suitable for intermittent, sporadic, and unpredictable transactional workloads. This model works well when the database workload is predictable because you can adjust capacity manually based on the expected workload. A better database setup here is to use an Amazon Aurora Serverless cluster.\n\nThe option that says: Launch a DynamoDB Global table with Auto Scaling enabled is incorrect because although it is using Auto Scaling, the scenario explicitly indicated that you need a relational database to handle your transactional workloads. DynamoDB is a NoSQL database and is not suitable for this use case. Moreover, the use of a DynamoDB Global table is not warranted since this is primarily used if you need a fully managed, multi-region, and multi-master database that provides fast, local, read and write performance for massively scaled, global applications.\n\nThe option that says: Launch an Amazon Redshift data warehouse cluster with Concurrency Scaling is incorrect because this type of database is primarily used for online analytical processing (OLAP) and not for online transactional processing (OLTP). Concurrency Scaling is simply an Amazon Redshift feature that automatically and elastically scales query processing power of your Redshift cluster to provide consistently fast performance for hundreds of concurrent queries.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",
    },
    {
      questionNo: 11,
      questionText:
        'An application that records weather data every minute is deployed in a fleet of Spot EC2 instances and uses a MySQL RDS database instance. Currently, there is only one RDS instance running in one Availability Zone. You plan to improve the database to ensure high availability by synchronous data replication to another RDS instance.\n\nWhich of the following performs synchronous data replication in RDS?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nRDS Read Replica',
        },
        {
          isCorrect: false,
          text: '​\n\nCloudFront running as a Multi-AZ deployment',
        },
        {
          isCorrect: false,
          text: '​\nDynamoDB Read Replica',
        },
        {
          isCorrect: true,
          text: '​\nRDS DB instance running as a Multi-AZ deployment\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nWhen you create or modify your DB instance to run as a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. Updates to your DB Instance are synchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB instance failure.\n\n\n\n\n\n\n\nRDS Read Replica is incorrect as a Read Replica provides an asynchronous replication instead of synchronous.\n\nDynamoDB Read Replica and CloudFront running as a Multi-AZ deployment are incorrect as both DynamoDB and CloudFront do not have a Read Replica feature.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/\n\n\n\n\nHere is a quick introduction to Amazon RDS:\n\nhttps://youtu.be/eMzCI7S1P9M',
    },
    {
      questionNo: 12,
      questionText:
        'You are building a new data analytics application in AWS which will be deployed in an Auto Scaling group of On-Demand EC2 instances and a MongoDB database. It is expected that the database will have high-throughput workloads performing small, random I/O operations. As the Solutions Architect, you are required to properly set up and launch the required resources in AWS. \n\nWhich of the following is the most suitable EBS type to use for your database?',
      options: [
        {
          isCorrect: true,
          text: '​\n\nProvisioned IOPS SSD (io1)\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nGeneral Purpose SSD (gp2)',
        },
        {
          isCorrect: false,
          text: '​\n\nThroughput Optimized HDD (st1)',
        },
        {
          isCorrect: false,
          text: '​\n\nCold HDD (sc1)',
        },
      ],
      explain:
        'Explanation\n\nOn a given volume configuration, certain I/O characteristics drive the performance behavior for your EBS volumes. SSD-backed volumes, such as General Purpose SSD (gp2) and Provisioned IOPS SSD (io1), deliver consistent performance whether an I/O operation is random or sequential. HDD-backed volumes like Throughput Optimized HDD (st1) and Cold HDD (sc1) deliver optimal performance only when I/O operations are large and sequential.\n\nIn the exam, always consider the difference between SSD and HDD as shown on the table below. This will allow you to easily eliminate specific EBS-types in the options which are not SSD or not HDD, depending on whether the question asks for a storage type which has small, random I/O operations or large, sequential I/O operations.\n\n\n\n\n\n\n\nProvisioned IOPS SSD (io1) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency. Unlike gp2, which uses a bucket and credit model to calculate performance, an io1 volume allows you to specify a consistent IOPS rate when you create the volume, and Amazon EBS delivers within 10 percent of the provisioned IOPS performance 99.9 percent of the time over a given year.\n\n\n\n\n\n\n\nGeneral Purpose SSD (gp2) is incorrect because although General Purpose is a type of SSD that can handle small, random I/O operations, the Provisioned IOPS SSD volumes are much more suitable to meet the needs of I/O-intensive database workloads such as MongoDB, Oracle, MySQL, and many others.\n\nThroughput Optimized HDD (st1) and Cold HDD (sc1) are incorrect because HDD volumes (such as Throughput Optimized HDD and Cold HDD volumes) are more suitable for workloads with large, sequential I/O operations instead of small, random I/O operations.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html#EBSVolumeTypes_piops\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html\n\n\n\n\nCheck out this Amazon EBS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-ebs/',
    },
    {
      questionNo: 13,
      questionText:
        'A global IT company with offices around the world has multiple AWS accounts. To improve efficiency and drive costs down, the Chief Information Officer (CIO) wants to set up a solution that centrally manages their AWS resources. This will allow them to procure AWS resources centrally and share resources such as AWS Transit Gateways, AWS License Manager configurations, or Amazon Route 53 Resolver rules across their various accounts.\n\nAs the Solutions Architect, which combination of options should you implement in this scenario? (Select TWO.)',
      options: [
        {
          isCorrect: true,
          text:
            "​\n\nConsolidate all of the company's accounts using AWS Organizations.\n\n(Correct)",
        },
        {
          isCorrect: true,
          text:
            '​\n\nUse the AWS Resource Access Manager (RAM) service to easily and securely share your resources with your AWS accounts.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse the AWS Identity and Access Management service to set up cross-account access that will easily and securely share your resources with your AWS accounts.',
        },
        {
          isCorrect: false,
          text:
            "​\n\nConsolidate all of the company's accounts using AWS ParallelCluster.",
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse AWS Control Tower to easily and securely share your resources with your AWS accounts.',
        },
      ],
      explain:
        "Explanation\n\nAWS Resource Access Manager (RAM) is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization. You can share AWS Transit Gateways, Subnets, AWS License Manager configurations, and Amazon Route 53 Resolver rules resources with RAM.\n\nMany organizations use multiple accounts to create administrative or billing isolation, and limit the impact of errors. RAM eliminates the need to create duplicate resources in multiple accounts, reducing the operational overhead of managing those resources in every single account you own. You can create resources centrally in a multi-account environment, and use RAM to share those resources across accounts in three simple steps: create a Resource Share, specify resources, and specify accounts. RAM is available to you at no additional charge.\n\n\n\n\n\n\n\nYou can procure AWS resources centrally, and use RAM to share resources such as subnets or License Manager configurations with other accounts. This eliminates the need to provision duplicate resources in every account in a multi-account environment, reducing the operational overhead of managing those resources in every account.\n\nAWS Organizations is an account management service that lets you consolidate multiple AWS accounts into an organization that you create and centrally manage. With Organizations, you can create member accounts and invite existing accounts to join your organization. You can organize those accounts into groups and attach policy-based controls.\n\nHence, the correct combination of options in this scenario is:\n\n- Consolidate all of the company's accounts using AWS Organizations.\n\n- Use the AWS Resource Access Manager (RAM) service to easily and securely share your resources with your AWS accounts.\n\nThe option that says: Use the AWS Identity and Access Management service to set up cross-account access that will easily and securely share your resources with your AWS accounts is incorrect because although you can delegate access to resources that are in different AWS accounts using IAM, this process is extremely tedious and entails a lot of operational overhead since you have to manually set up cross-account access to each and every AWS account of the company. A better solution is to use AWS Resources Access Manager instead.\n\nThe option that says: Use AWS Control Tower to easily and securely share your resources with your AWS accounts is incorrect because AWS Control Tower simply offers the easiest way to set up and govern a new, secure, multi-account AWS environment. This is not the most suitable service to use to securely share your resources across AWS accounts or within your Organization. You have to use AWS Resources Access Manager (RAM) instead.\n\nThe option that says: Consolidate all of the company's accounts using AWS ParallelCluster is incorrect because AWS ParallelCluster is simply an AWS-supported open-source cluster management tool that makes it easy for you to deploy and manage High-Performance Computing (HPC) clusters on AWS. In this particular scenario, it is more appropriate to use AWS Organizations to consolidate all of your AWS accounts.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/ram/\n\nhttps://docs.aws.amazon.com/ram/latest/userguide/shareable.html",
    },
    {
      questionNo: 14,
      questionText:
        'A web application is using CloudFront to distribute their images, videos, and other static contents stored in their S3 bucket to its users around the world. The company has recently introduced a new member-only access to some of its high quality media files. There is a requirement to provide access to multiple private media files only to their paying subscribers without having to change their current URLs.   \n\nWhich of the following is the most suitable solution that you should implement to satisfy this requirement?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nCreate a Signed URL with a custom policy which only allows the members to see the private files.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nConfigure your CloudFront distribution to use Field-Level Encryption to protect your private data and only allow access to members.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nConfigure your CloudFront distribution to use Match Viewer as its Origin Protocol Policy which will automatically match the user request. This will allow access to the private content if the request is a paying member and deny it if it is not a member.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nUse Signed Cookies to control who can access the private files in your CloudFront distribution by modifying your application to determine whether a user should have access to your content. For members, send the required Set-Cookie headers to the viewer which will unlock the content only to them.\n\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nCloudFront signed URLs and signed cookies provide the same basic functionality: they allow you to control who can access your content. If you want to serve private content through CloudFront and you're trying to decide whether to use signed URLs or signed cookies, consider the following:\n\nUse signed URLs for the following cases:\n\n- You want to use an RTMP distribution. Signed cookies aren't supported for RTMP distributions.\n\n- You want to restrict access to individual files, for example, an installation download for your application.\n\n- Your users are using a client (for example, a custom HTTP client) that doesn't support cookies.\n\nUse signed cookies for the following cases:\n\n- You want to provide access to multiple restricted files, for example, all of the files for a video in HLS format or all of the files in the subscribers' area of a website.\n\n- You don't want to change your current URLs.\n\nHence, the correct answer for this scenario is the option that says: Use Signed Cookies to control who can access the private files in your CloudFront distribution by modifying your application to determine whether a user should have access to your content. For members, send the required Set-Cookie headers to the viewer which will unlock the content only to them.\n\nThe option that says: Configure your CloudFront distribution to use Match Viewer as its Origin Protocol Policy which will automatically match the user request. This will allow access to the private content if the request is a paying member and deny it if it is not a member is incorrect because a Match Viewer is an Origin Protocol Policy which configures CloudFront to communicate with your origin using HTTP or HTTPS, depending on the protocol of the viewer request. CloudFront caches the object only once even if viewers make requests using both HTTP and HTTPS protocols.\n\nThe option that says: Create a Signed URL with a custom policy which only allows the members to see the private files is incorrect because Signed URLs are primarily used for providing access to individual files, as shown on the above explanation. In addition, the scenario explicitly says that they don't want to change their current URLs which is why implementing Signed Cookies is more suitable than Signed URL.\n\nThe option that says: Configure your CloudFront distribution to use Field-Level Encryption to protect your private data and only allow access to members is incorrect because Field-Level Encryption only allows you to securely upload user-submitted sensitive information to your web servers. It does not provide access to download multiple private files.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html\n\n\n\n\nCheck out this Amazon CloudFront Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudfront/",
    },
    {
      questionNo: 15,
      questionText:
        'You are working as a Solutions Architect for a major telecommunications company where you are assigned to improve the security of your database tier by tightly managing the data flow of your Amazon Redshift cluster. One of the requirements is to use VPC flow logs to monitor all the COPY and UNLOAD traffic of your Redshift cluster that moves in and out of your VPC. \n\nWhich of the following is the most suitable solution to implement in this scenario?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nUse the Amazon Redshift Spectrum feature.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCreate a new flow log that tracks the traffic of your Amazon Redshift cluster.',
        },
        {
          isCorrect: false,
          text: '​\n\nEnable Audit Logging in your Amazon Redshift cluster.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nEnable Enhanced VPC routing on your Amazon Redshift cluster.\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nWhen you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC. By using Enhanced VPC Routing, you can use standard VPC features, such as VPC security groups, network access control lists (ACLs), VPC endpoints, VPC endpoint policies, internet gateways, and Domain Name System (DNS) servers. Hence, enabling Enhanced VPC routing on your Amazon Redshift cluster is the correct answer.\n\nYou use these features to tightly manage the flow of data between your Amazon Redshift cluster and other resources. When you use Enhanced VPC Routing to route traffic through your VPC, you can also use VPC flow logs to monitor COPY and UNLOAD traffic. If Enhanced VPC Routing is not enabled, Amazon Redshift routes traffic through the Internet, including traffic to other services within the AWS network.\n\n\n\n\n\n\n\nEnabling Audit Logging in your Amazon Redshift cluster is incorrect because the Audit Logging feature is primarily used to get the information about the connection, queries, and user activities in your Redshift cluster.\n\nUsing the Amazon Redshift Spectrum feature is incorrect because this is primarily used to run queries against exabytes of unstructured data in Amazon S3, with no loading or ETL required.\n\nCreating a new flow log that tracks the traffic of your Amazon Redshift cluster is incorrect because, by default, you cannot create a flow log for your Amazon Redshift cluster. You have to enable Enhanced VPC Routing and set up the required VPC configuration.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html\n\n\n\n\nCheck out this Amazon Redshift Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-redshift/',
    },
    {
      questionNo: 16,
      questionText:
        'An AI-powered Forex trading application consumes thousands of data sets to train its machine learning model. The application’s workload requires a high-performance, parallel hot storage to process the training datasets concurrently. It also needs cost-effective cold storage to archive those datasets that yield low profit.\n\nWhich of the following Amazon storage services should the developer use?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nUse Amazon FSx For Windows File Server and Amazon S3 for hot and cold storage respectively.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse Amazon Elastic File System and Amazon S3 for hot and cold storage respectively.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nUse Amazon FSx For Lustre and Amazon S3 for hot and cold storage respectively.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse Amazon FSx For Lustre and Amazon EBS Provisioned IOPS SSD (io1) volumes for hot and cold storage respectively.',
        },
      ],
      explain:
        'Explanation\n\nHot storage refers to the storage that keeps frequently accessed data ( hot data ). Warm storage refers to the storage that keeps less frequently accessed data ( warm data ). Cold storage refers to the storage that keeps rarely accessed data ( cold data ). In terms of pricing, the colder the data, the cheaper it is to store, and the costlier it is to access when needed.\n\nAmazon FSx For Lustre is a high-performance file system for fast processing of workloads. Lustre is a popular open-source parallel file system which stores data across multiple network file servers to maximize performance and reduce bottlenecks.\n\nAmazon FSx for Windows File Server is a fully managed Microsoft Windows file system with full support for the SMB protocol, Windows NTFS, Microsoft Active Directory ( AD ) Integration.\n\nAmazon Elastic File System is a fully-managed file storage service that makes it easy to set up and scale file storage in the Amazon Cloud.\n\nAmazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. S3 offers different storage tiers for different use cases ( frequently accessed data, infrequently accessed data, and rarely accessed data ).\n\nThe question has two requirements:\n\nHigh-performance, parallel hot storage to process the training datasets concurrently.\n\nCost-effective cold storage to keep the archived datasets that are accessed infrequently\n\nIn this case, we can use Amazon FSx For Lustre for the first requirement, as it provides a high-performance, parallel file system for hot data. On the second requirement, we can use Amazon S3 for storing the cold data. Amazon S3 supports a cold storage system via Amazon S3 Glacier / Glacier Deep Archive.\n\nHence, the correct answer is Use Amazon FSx For Lustre and Amazon S3 for hot and cold storage respectively.\n\nUsing Amazon FSx For Lustre and Amazon EBS Provisioned IOPS SSD (io1) volumes for hot and cold storage respectively is incorrect because the Provisioned IOPS SSD ( io1 ) volumes are designed as a hot storage to meet the needs of I/O-intensive workloads. EBS has a storage option called Cold HDD but it is not used for storing cold data. In addition, EBS Cold HDD is a lot more expensive than using Amazon S3 Glacier / Glacier Deep Archive.\n\nUsing Amazon Elastic File System and Amazon S3 for hot and cold storage respectively is incorrect because although EFS supports concurrent access to data, it does not have the high-performance ability that is required for machine learning workloads.\n\nUsing Amazon FSx For Windows File Server and Amazon S3 for hot and cold storage respectively is incorrect because Amazon FSx For Windows File Server does not have a parallel file system, unlike Lustre.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/fsx/\n\nhttps://docs.aws.amazon.com/whitepapers/latest/cost-optimization-storage-optimization/aws-storage-services.html\n\nhttps://aws.amazon.com/blogs/startups/picking-the-right-data-store-for-your-workload/\n\n\n\n\nCheck out this Amazon FSx Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-fsx/',
    },
    {
      questionNo: 17,
      questionText:
        'A travel photo sharing website is using Amazon S3 to serve high-quality photos to visitors of your website. After a few days, you found out that there are other travel websites linking and using your photos. This resulted in financial losses for your business.\n\nWhat is the MOST effective method to mitigate this issue?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nUse CloudFront distributions for your photos.',
        },
        {
          isCorrect: false,
          text: '​\nBlock the IP addresses of the offending websites using NACL.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nStore and privately serve the high-quality photos on Amazon WorkDocs instead.',
        },
        {
          isCorrect: true,
          text:
            '​\nConfigure your S3 bucket to remove public read access and use pre-signed URLs with expiry dates.\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nIn Amazon S3, all objects are private by default. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.\n\nWhen you create a pre-signed URL for your object, you must provide your security credentials, specify a bucket name, an object key, specify the HTTP method (GET to download the object) and expiration date and time. The pre-signed URLs are valid only for the specified duration.\n\nAnyone who receives the pre-signed URL can then access the object. For example, if you have a video in your bucket and both the bucket and the object are private, you can share the video with others by generating a pre-signed URL.\n\n\n\n\n\n\n\nUsing CloudFront distributions for your photos is incorrect. CloudFront is a content delivery network service that speeds up delivery of content to your customers.\n\nBlocking the IP addresses of the offending websites using NACL is also incorrect. Blocking IP address using NACLs is not a very efficient method because a quick change in IP address would easily bypass this configuration.\n\nStoring and privately serving the high-quality photos on Amazon WorkDocs instead is incorrect as WorkDocs is simply a fully managed, secure content creation, storage, and collaboration service. It is not a suitable service for storing static content. Amazon WorkDocs is more often used to easily create, edit, and share documents for collaboration and not for serving object data like Amazon S3.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectOperations.html\n\n\n\n\nCheck out this Amazon CloudFront Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudfront/\n\n\n\n\nS3 Pre-signed URLs vs CloudFront Signed URLs vs Origin Access Identity (OAI)\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-s3-pre-signed-urls-vs-cloudfront-signed-urls-vs-origin-access-identity-oai/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/',
    },
    {
      questionNo: 18,
      questionText:
        'An application is hosted in an AWS Fargate cluster that runs a batch job whenever an object is loaded on an Amazon S3 bucket. The minimum number of ECS Tasks is initially set to 1 to save on costs, and it will only increase the task count based on the new objects uploaded on the S3 bucket. Once processing is done, the bucket becomes empty and the ECS Task count should be back to 1.\n\nWhich is the most suitable option to implement with the LEAST amount of effort?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nSet up a CloudWatch Event rule to detect S3 object PUT operations and set the target to a Lambda function that will run Amazon ECS API command to increase the number of tasks on ECS. Create another rule to detect S3 DELETE operations and run the Lambda function to reduce the number of ECS tasks.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up an alarm in CloudWatch to monitor CloudTrail since the S3 object-level operations are recorded on CloudTrail. Create two Lambda functions for increasing/decreasing the ECS task count. Set these as respective targets for the CloudWatch Alarm depending on the S3 event.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nSet up a CloudWatch Event rule to detect S3 object PUT operations and set the target to the ECS cluster with the increased number of tasks. Create another rule to detect S3 DELETE operations and set the target to the ECS Cluster with 1 as the Task count.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up an alarm in CloudWatch to monitor CloudTrail since this S3 object-level operations are recorded on CloudTrail. Set two alarm actions to update ECS task count to scale-out/scale-in depending on the S3 event.',
        },
      ],
      explain:
        'Explanation\n\nYou can use CloudWatch Events to run Amazon ECS tasks when certain AWS events occur. You can set up a CloudWatch Events rule that runs an Amazon ECS task whenever a file is uploaded to a certain Amazon S3 bucket using the Amazon S3 PUT operation. You can also declare a reduced number of ECS tasks whenever a file is deleted on the S3 bucket using the DELETE operation.\n\nFirst, you must create a CloudWatch Events rule for the S3 service that will watch for object-level operations – PUT and DELETE objects. For object-level operations, it is required to create a CloudTrail trail first. On the Targets section, select the “ECS task” and input the needed values such as the cluster name, task definition and the task count. You need two rules – one for the scale-up and another for the scale-down of the ECS task count.\n\n\n\n\n\n\n\nHence, the correct answer is: Set up a CloudWatch Event rule to detect S3 object PUT operations and set the target to the ECS cluster with the increased number of tasks. Create another rule to detect S3 DELETE operations and set the target to the ECS Cluster with 1 as the Task count.\n\nThe option that says: Set up a CloudWatch Event rule to detect S3 object PUT operations and set the target to a Lambda function that will run Amazon ECS API command to increase the number of tasks on ECS. Create another rule to detect S3 DELETE operations and run the Lambda function to reduce the number of ECS tasks is incorrect because although this solution meets the requirement, creating your own Lambda function for this scenario is not really necessary. It is much simpler to control ECS task directly as target for the CloudWatch Event rule. Take note that the scenario asks for a solution that is the easiest to implement.\n\nThe option that says: Set up an alarm in CloudWatch to monitor CloudTrail since the S3 object-level operations are recorded on CloudTrail. Create two Lambda functions for increasing/decreasing the ECS task count. Set these as respective targets for the CloudWatch Alarm depending on the S3 event is incorrect because using CloudTrail, CloudWatch Alarm, and two Lambda functions creates an unnecessary complexity to what you want to achieve. CloudWatch Events can directly target an ECS task on the Targets section when you create a new rule.\n\nThe option that says: Set up an alarm in CloudWatch to monitor CloudTrail since this S3 object-level operations are recorded on CloudTrail. Set two alarm actions to update ECS task count to scale-out/scale-in depending on the S3 event is incorrect because you can’t directly set CloudWatch Alarms to update the ECS task count. You have to use CloudWatch Events instead.\n\n\n\n\nReferences: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-tutorial-ECS.html\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/events/Create-CloudWatch-Events-Rule.html\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/',
    },
    {
      questionNo: 19,
      questionText:
        'Your company announced that there would be a surprise IT audit on all of the AWS resources being used in the production environment. During the audit activities, it was noted that you are using a combination of Standard and Scheduled Reserved EC2 instances in your applications. They argued that you should have used Spot EC2 instances instead as it is cheaper than the Reserved Instance.\n\nWhich of the following are the characteristics and benefits of using these two types of Reserved EC2 instances, which you can use as justification? (Select TWO.)',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nStandard Reserved Instances can be later exchanged for other Convertible Reserved Instances',
        },
        {
          isCorrect: false,
          text:
            '​\n\nIt can enable you to reserve capacity for your Amazon EC2 instances in multiple Availability Zones and multiple AWS Regions for any duration.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nYou can have capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term through Scheduled Reserved Instances\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            "​\n\nIt runs in a VPC on hardware that's dedicated to a single customer.",
        },
        {
          isCorrect: true,
          text:
            "​\n\nReserved Instances doesn't get interrupted unlike Spot instances in the event that there are not enough unused EC2 instances to meet the demand.\n\n(Correct)",
        },
      ],
      explain:
        "Explanation\n\nReserved Instances (RIs) provide you with a significant discount (up to 75%) compared to On-Demand instance pricing. You have the flexibility to change families, OS types, and tenancies while benefiting from RI pricing when you use Convertible RIs. One important thing to remember here is that Reserved Instances are not physical instances, but rather a billing discount applied to the use of On-Demand Instances in your account.\n\nWhen your computing needs change, you can modify your Standard or Convertible Reserved Instances and continue to take advantage of the billing benefit. You can modify the Availability Zone, scope, network platform, or instance size (within the same instance type) of your Reserved Instance. You can also sell your unused instance on the Reserved Instance Marketplace.\n\nThe option that says: Reserved Instances don't get interrupted unlike Spot instances in the event that there are not enough unused EC2 instances to meet the demand is correct. Likewise, the option that says: You can have capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term through Scheduled Reserved Instances is correct. You reserve the capacity in advance, so that you know it is available when you need it. You pay for the time that the instances are scheduled, even if you do not use them.\n\nThe option that says: Standard Reserved Instances can be later exchanged for other Convertible Reserved Instances is incorrect because only Convertible Reserved Instances can be exchanged for other Convertible Reserved Instances.\n\nThe option that says: It can enable you to reserve capacity for your Amazon EC2 instances in multiple Availability Zones and multiple AWS Regions for any duration is incorrect because you can reserve capacity to a specific AWS Region (regional Reserved Instance) or specific Availability Zone (zonal Reserved Instance) only. You cannot reserve capacity to multiple AWS Regions in a single RI purchase.\n\nThe option that says: It runs in a VPC on hardware that's dedicated to a single customer is incorrect because that is the description of a Dedicated instance and not a Reserved Instance. A Dedicated instance runs in a VPC on hardware that's dedicated to a single customer.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html\n\nhttps://aws.amazon.com/ec2/pricing/reserved-instances/\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-types.html\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/",
    },
    {
      questionNo: 20,
      questionText:
        'An application hosted in EC2 consumes messages from an SQS queue and is integrated with SNS to send out an email to you once the process is complete. The Operations team received 5 orders but after a few hours, they saw 20 email notifications in their inbox.\n\nWhich of the following could be the possible culprit for this issue?',
      options: [
        {
          isCorrect: true,
          text:
            '​\nThe web application is not deleting the messages in the SQS queue after it has processed them.\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\nThe web application does not have permission to consume messages in the SQS queue.',
        },
        {
          isCorrect: false,
          text:
            '​\nThe web application is set for long polling so the messages are being sent twice.',
        },
        {
          isCorrect: false,
          text:
            '​\nThe web application is set to short polling so some messages are not being picked up',
        },
      ],
      explain:
        "Explanation\n\nAlways remember that the messages in the SQS queue will continue to exist even after the EC2 instance has processed it, until you delete that message. You have to ensure that you delete the message after processing to prevent the message from being received and processed again once the visibility timeout expires.\n\nThere are three main parts in a distributed messaging system:\n\n1. The components of your distributed system (EC2 instances)\n\n2. Your queue (distributed on Amazon SQS servers)\n\n3. Messages in the queue.\n\n\n\n\nYou can set up a system which has several components that send messages to the queue and receive messages from the queue. The queue redundantly stores the messages across multiple Amazon SQS servers.\n\n\n\n\n\n\n\nRefer to the third step of the SQS Message Lifecycle:\n\nComponent 1 sends Message A to a queue, and the message is distributed across the Amazon SQS servers redundantly.\n\nWhen Component 2 is ready to process a message, it consumes messages from the queue, and Message A is returned. While Message A is being processed, it remains in the queue and isn't returned to subsequent receive requests for the duration of the visibility timeout.\n\nComponent 2 deletes Message A from the queue to prevent the message from being received and processed again once the visibility timeout expires.\n\nThe option that says: The web application is set for long polling so the messages are being sent twice is incorrect because long polling helps reduce the cost of using SQS by eliminating the number of empty responses (when there are no messages available for a ReceiveMessage request) and false empty responses (when messages are available but aren't included in a response). Messages being sent twice in an SQS queue configured with long polling is quite unlikely.\n\nThe option that says: The web application is set to short polling so some messages are not being picked up is incorrect since you are receiving emails from SNS where messages are certainly being processed. Following the scenario, messages not being picked up won't result into 20 messages being sent to your inbox.\n\nThe option that says: The web application does not have permission to consume messages in the SQS queue is incorrect because not having the correct permissions would have resulted in a different response. The scenario says that messages were properly processed but there were over 20 messages that were sent, hence, there is no problem with the accessing the queue.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-lifecycle.html\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html\n\n\n\n\nCheck out this Amazon SQS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-sqs/",
    },
    {
      questionNo: 21,
      questionText:
        'You are an AWS Solutions Architect designing an online analytics application that uses Redshift Cluster for its data warehouse. Which service will allow you to monitor all API calls to your Redshift instance and can also provide secured data for auditing and compliance purposes?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nAWS X-Ray',
        },
        {
          isCorrect: false,
          text: '​\n\nCloudWatch',
        },
        {
          isCorrect: false,
          text: '​\n\nRedshift Spectrum',
        },
        {
          isCorrect: true,
          text: '​\nCloudTrail for security logs\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nAWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.\n\nCloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, API calls, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting.\n\n\n\n\n\n\n\nCloudWatch is incorrect because although this is also a monitoring service, it cannot track the API calls to your AWS resources.\n\nAWS X-Ray is incorrect because this is not a suitable service to use to track each API call to your AWS resources. It just helps you debug and analyze your microservices applications with request tracing so you can find the root cause of issues and performance.\n\nRedshift Spectrum is incorrect because this is not a monitoring service but rather a feature of Amazon Redshift that enables you to query and analyze all of your data in Amazon S3 using the open data formats you already use, with no data loading or transformations needed.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/cloudtrail/\n\n\n\n\nCheck out this AWS CloudTrail Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-cloudtrail/',
    },
    {
      questionNo: 22,
      questionText:
        'A government entity is conducting a population and housing census in the city. Each household information uploaded on their online portal is stored in encrypted files in Amazon S3. The government assigned its Solutions Architect to set compliance policies that verify sensitive data in a manner that meets their compliance standards. They should also be alerted if there are compromised files detected containing personally identifiable information (PII), protected health information (PHI) or intellectual properties (IP).\n\nWhich of the following should the Architect implement to satisfy this requirement?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nSet up and configure Amazon GuardDuty to monitor malicious activity on their Amazon S3 data.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up and configure Amazon Rekognition to monitor and recognize patterns on their Amazon S3 data.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up and configure Amazon Inspector to send out alert notifications whenever a security violation is detected on their Amazon S3 data.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nSet up and configure Amazon Macie to monitor and detect usage patterns on their Amazon S3 data.\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nAmazon Macie is an ML-powered security service that helps you prevent data loss by automatically discovering, classifying, and protecting sensitive data stored in Amazon S3. Amazon Macie uses machine learning to recognize sensitive data such as personally identifiable information (PII) or intellectual property, assigns a business value, and provides visibility into where this data is stored and how it is being used in your organization.\n\nAmazon Macie continuously monitors data access activity for anomalies, and delivers alerts when it detects risk of unauthorized access or inadvertent data leaks. Amazon Macie has ability to detect global access permissions inadvertently being set on sensitive data, detect uploading of API keys inside source code, and verify sensitive customer data is being stored and accessed in a manner that meets their compliance standards.\n\n\n\n\n\n\n\nHence, the correct answer is: Set up and configure Amazon Macie to monitor and detect usage patterns on their Amazon S3 data.\n\nThe option that says: Set up and configure Amazon Rekognition to monitor and recognize patterns on their Amazon S3 data is incorrect because Rekognition is simply a service that can identify the objects, people, text, scenes, and activities, as well as detect any inappropriate content on your images or videos.\n\nThe option that says: Set up and configure Amazon GuardDuty to monitor malicious activity on their Amazon S3 data is incorrect because GuardDuty is just a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads.\n\nThe option that says: Set up and configure Amazon Inspector to send out alert notifications whenever a security violation is detected on their Amazon S3 data is incorrect because Inspector is basically an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html\n\nhttps://aws.amazon.com/macie/faq/\n\nhttps://docs.aws.amazon.com/macie/index.html\n\n\n\n\nCheck out this Amazon Macie Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-macie/',
    },
    {
      questionNo: 23,
      questionText:
        'A leading utilities provider is in the process of migrating their applications to AWS. Their Solutions Architect created an EBS-Backed EC2 instance with ephemeral0 and ephemeral1 instance store volumes attached to host a web application that fetches and stores data from a web API service.\n\nIf this instance is stopped, what will happen to the data on the ephemeral store volumes?',
      options: [
        {
          isCorrect: false,
          text: '​\nData is automatically saved in an EBS volume.',
        },
        {
          isCorrect: true,
          text: '​\nData will be deleted.\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\nData is automatically saved as an EBS snapshot.',
        },
        {
          isCorrect: false,
          text: '​\nData is unavailable until the instance is restarted.',
        },
      ],
      explain:
        'Explanation\n\nThe word ephemeral means "short-lived" or "temporary" in the English dictionary. Hence, when you see this word in AWS, always consider this as just a temporary memory or a short-lived storage.\n\nThe virtual devices for instance store volumes are named as ephemeral[0-23]. Instance types that support one instance store volume have ephemeral0. Instance types that support two instance store volumes have ephemeral0 and ephemeral1, and so on until ephemeral23.\n\nThe data in an instance store persists only during the lifetime of its associated instance. If an instance reboots (intentionally or unintentionally), data in the instance store persists. However, data in the instance store is lost under the following circumstances:\n\n- The underlying disk drive fails\n\n- The instance stops\n\n- The instance terminates\n\n\n\n\nHence, the option that says: Data will be deleted is the correct answer.\n\nThe option that says: Data is automatically saved in an EBS volume is incorrect since instance store volumes and EBS volumes are two different storage types. An Amazon EBS volume is a durable, block-level storage device that you can attach to a single EC2 instance. An instance store provides temporary block-level storage and is located on disks that are physically attached to the host computer. No automatic backup will be performed.\n\nThe option that says: Data is unavailable until the instance is restarted is incorrect because once you stop an instance, the data in the ephemeral instance store volumes will be gone.\n\nThe option that says: Data is automatically saved as an EBS snapshot is incorrect because just like in the option above, instance store volumes and EBS volumes are two different storage devices. There is no automated snapshot that will be created.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html?shortFooter=true#instance-store-lifetime\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/',
    },
    {
      questionNo: 24,
      questionText:
        'A financial application is composed of an Auto Scaling group of EC2 instances, an Application Load Balancer, and a MySQL RDS instance in a Multi-AZ Deployments configuration. To protect the confidential data of your customers, you have to ensure that your RDS database can only be accessed using the profile credentials specific to your EC2 instances via an authentication token.\n\nAs the Solutions Architect of the company, which of the following should you do to meet the above requirement?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nCreate an IAM Role and assign it to your EC2 instances which will grant exclusive access to your RDS instance.',
        },
        {
          isCorrect: true,
          text: '​\n\nEnable the IAM DB Authentication.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse a combination of IAM and STS to restrict access to your RDS instance via a temporary token.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nConfigure SSL in your application to encrypt the database connection to RDS.',
        },
      ],
      explain:
        "Explanation\n\nYou can authenticate to your DB instance using AWS Identity and Access Management (IAM) database authentication. IAM database authentication works with MySQL and PostgreSQL. With this authentication method, you don't need to use a password when you connect to a DB instance. Instead, you use an authentication token.\n\nAn authentication token is a unique string of characters that Amazon RDS generates on request. Authentication tokens are generated using AWS Signature Version 4. Each token has a lifetime of 15 minutes. You don't need to store user credentials in the database, because authentication is managed externally using IAM. You can also still use standard database authentication.\n\n\n\n\n\n\n\nIAM database authentication provides the following benefits:\n\nNetwork traffic to and from the database is encrypted using Secure Sockets Layer (SSL).\n\nYou can use IAM to centrally manage access to your database resources, instead of managing access individually on each DB instance.\n\nFor applications running on Amazon EC2, you can use profile credentials specific to your EC2 instance to access your database instead of a password, for greater security\n\nHence, enabling IAM DB Authentication is the correct answer based on the above reference.\n\nConfiguring SSL in your application to encrypt the database connection to RDS is incorrect because an SSL connection is not using an authentication token from IAM. Although configuring SSL to your application can improve the security of your data in flight, it is still not a suitable option to use in this scenario.\n\nCreating an IAM Role and assigning it to your EC2 instances which will grant exclusive access to your RDS instance is incorrect because although you can create and assign an IAM Role to your EC2 instances, you still need to configure your RDS to use IAM DB Authentication.\n\nUsing a combination of IAM and STS to restrict access to your RDS instance via a temporary token is incorrect because you have to use IAM DB Authentication for this scenario, and not a combination of an IAM and STS. Although STS is used to send temporary tokens for authentication, this is not a compatible use case for RDS.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/",
    },
    {
      questionNo: 25,
      questionText:
        'You are designing a banking portal which uses Amazon ElastiCache for Redis as its distributed session management component. Since the other Cloud Engineers in your department have access to your ElastiCache cluster, you have to secure the session data in the portal by requiring them to enter a password before they are granted permission to execute Redis commands.   \n\nAs the Solutions Architect, which of the following should you do to meet the above requirement?',
      options: [
        {
          isCorrect: true,
          text:
            '​\n\nAuthenticate the users using Redis AUTH by creating a new Redis Cluster with both the --transit-encryption-enabled and --auth-token parameters enabled.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up a Redis replication group and enable the AtRestEncryptionEnabled parameter.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nEnable the in-transit encryption for Redis replication groups.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up an IAM Policy and MFA which requires the Cloud Engineers to enter their IAM credentials and token before they can access the ElastiCache cluster.',
        },
      ],
      explain:
        'Explanation\n\nUsing Redis AUTH command can improve data security by requiring the user to enter a password before they are granted permission to execute Redis commands on a password-protected Redis server. Hence, the correct answer is: Authenticate the users using Redis AUTH by creating a new Redis Cluster with both the --transit-encryption-enabled and --auth-token parameters enabled.\n\nTo require that users enter a password on a password-protected Redis server, include the parameter --auth-token with the correct password when you create your replication group or cluster and on all subsequent commands to the replication group or cluster.\n\n\n\n\n\n\n\nSetting up an IAM Policy and MFA which requires the Cloud Engineers to enter their IAM credentials and token before they can access the ElastiCache cluster is incorrect because this is not possible in IAM. You have to use the Redis AUTH option instead.\n\nSetting up a Redis replication group and enabling the AtRestEncryptionEnabled parameter is incorrect because the Redis At-Rest Encryption feature only secures the data inside the in-memory data store. You have to use Redis AUTH option instead.\n\nEnabling the in-transit encryption for Redis replication groups is incorrect because although in-transit encryption is part of the solution, it is missing the most important thing which is the Redis AUTH option.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html\n\nhttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/encryption.html\n\n\n\n\nCheck out this Amazon ElastiCache Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-elasticache/\n\n\n\n\nRedis (cluster mode enabled vs disabled) vs Memcached:\n\nhttps://tutorialsdojo.com/redis-cluster-mode-enabled-vs-disabled-vs-memcached/',
    },
    {
      questionNo: 26,
      questionText:
        'A Docker application, which is running on an Amazon ECS cluster behind a load balancer, is heavily using DynamoDB. You are instructed to improve the database performance by distributing the workload evenly and using the provisioned throughput efficiently.   \n\nWhich of the following would you consider to implement for your DynamoDB table?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nReduce the number of partition keys in the DynamoDB table.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse partition keys with low-cardinality attributes, which have a few number of distinct values for each item.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nUse partition keys with high-cardinality attributes, which have a large number of distinct values for each item.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nAvoid using a composite primary key, which is composed of a partition key and a sort key.',
        },
      ],
      explain:
        "Explanation\n\nThe partition key portion of a table's primary key determines the logical partitions in which a table's data is stored. This in turn affects the underlying physical partitions. Provisioned I/O capacity for the table is divided evenly among these physical partitions. Therefore a partition key design that doesn't distribute I/O requests evenly can create \"hot\" partitions that result in throttling and use your provisioned I/O capacity inefficiently.\n\nThe optimal usage of a table's provisioned throughput depends not only on the workload patterns of individual items, but also on the partition-key design. This doesn't mean that you must access all partition key values to achieve an efficient throughput level, or even that the percentage of accessed partition key values must be high. It does mean that the more distinct partition key values that your workload accesses, the more those requests will be spread across the partitioned space. In general, you will use your provisioned throughput more efficiently as the ratio of partition key values accessed to the total number of partition key values increases.\n\nOne example for this is the use of partition keys with high-cardinality attributes, which have a large number of distinct values for each item.\n\nReducing the number of partition keys in the DynamoDB table is incorrect because instead of doing this, you should actually add more to improve its performance to distribute the I/O requests evenly and not avoid \"hot\" partitions.\n\nUsing partition keys with low-cardinality attributes, which have a few number of distinct values for each item is incorrect because this is the exact opposite of the correct answer. Remember that the more distinct partition key values your workload accesses, the more those requests will be spread across the partitioned space. Conversely, the less distinct partition key values, the less evenly spread it would be across the partitioned space, which effectively slows the performance.\n\nThe option that says: Avoid using a composite primary key, which is composed of a partition key and a sort key is incorrect because as mentioned, a composite primary key will provide more partition for the table and in turn, improves the performance. Hence, it should be used and not avoided.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-uniform-load.html\n\nhttps://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/\n\n\n\n\nCheck out this Amazon DynamoDB Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-dynamodb/",
    },
    {
      questionNo: 27,
      questionText:
        'You have identified a series of DDoS attacks while monitoring your VPC. As the Solutions Architect, you are responsible in fortifying your current cloud infrastructure to protect the data of your clients. \n\nWhich of the following is the most suitable solution to mitigate these kinds of attacks?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nSet up a web application firewall using AWS WAF to filter, monitor, and block HTTP traffic.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nUse AWS Shield to detect and mitigate DDoS attacks.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUsing the AWS Firewall Manager, set up a security layer that will prevent SYN floods, UDP reflection attacks and other DDoS attacks.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nA combination of Security Groups and Network Access Control Lists to only allow authorized traffic to access your VPC.',
        },
      ],
      explain:
        'Explanation\n\nFor higher levels of protection against attacks targeting your applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing(ELB), Amazon CloudFront, and Amazon Route 53 resources, you can subscribe to AWS Shield Advanced. In addition to the network and transport layer protections that come with Standard, AWS Shield Advanced provides additional detection and mitigation against large and sophisticated DDoS attacks, near real-time visibility into attacks, and integration with AWS WAF, a web application firewall.\n\n\n\n\n\n\n\nAWS Shield Advanced also gives you 24x7 access to the AWS DDoS Response Team (DRT) and protection against DDoS related spikes in your Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing(ELB), Amazon CloudFront, and Amazon Route 53 charges.\n\nThe option that says: Using the AWS Firewall Manager, set up a security layer that will prevent SYN floods, UDP reflection attacks and other DDoS attacks is incorrect because the AWS Firewall Manager is mainly used to simplify your AWS WAF administration and maintenance tasks across multiple accounts and resources. It does not protect your VPC against DDoS attacks.\n\nThe option that says: Set up a web application firewall using AWS WAF to filter, monitor, and block HTTP traffic is incorrect because even though AWS WAF can help you block common attack patterns to your VPC such as SQL injection or cross-site scripting, this is still not enough to withstand DDoS attacks. It is better to use AWS Shield in this scenario.\n\nThe option that says: A combination of Security Groups and Network Access Control Lists to only allow authorized traffic to access your VPC is incorrect because although using a combination of Security Groups and NACLs are valid to provide security to your VPC, this is not enough to mitigate a DDoS attack. You should use AWS Shield for better security protection.\n\n\n\n\nReferences:\n\nhttps://d1.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf\n\nhttps://aws.amazon.com/shield/\n\n\n\n\nCheck out this AWS Shield Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-shield/',
    },
    {
      questionNo: 28,
      questionText:
        'You are working as a Solutions Architect for a technology company which is in the process of migrating their applications to AWS. One of their systems requires a database that can scale globally and can handle frequent schema changes. The application should not have any downtime or performance issues whenever there is a schema change in the database. It should also provide low-latency response to high-traffic queries.\n\nWhich is the most suitable database solution to use to achieve this requirement?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nRedshift',
        },
        {
          isCorrect: false,
          text:
            '​\n\nAn Amazon RDS instance in Multi-AZ Deployments configuration',
        },
        {
          isCorrect: true,
          text: '​\n\nAmazon DynamoDB\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nAn Amazon Aurora database with Read Replicas',
        },
      ],
      explain:
        'Explanation\n\nBefore we proceed in answering this question, we must first be clear with the actual definition of a "schema". Basically, the english definition of a schema is: a representation of a plan or theory in the form of an outline or model.\n\nJust think of a schema as the "structure" or a "model" of your data in your database. Since the scenario requires that the schema, or the structure of your data, changes frequently, then you have to pick a database which provides a non-rigid and flexible way of adding or removing new types of data. This is a classic example of choosing between a relational database and non-relational (NoSQL) database.\n\n\n\n\n\n\n\nA relational database is known for having a rigid schema, with a lot of constraints and limits as to which (and what type of ) data can be inserted or not. It is primarily used for scenarios where you have to support complex queries which fetch data across a number of tables. It is best for scenarios where you have complex table relationships but for use cases where you need to have a flexible schema, this is not a suitable database to use.\n\nFor NoSQL, it is not as rigid as a relational database because you can easily add or remove rows or elements in your table/collection entry. It also has a more flexible schema because it can store complex hierarchical data within a single item which, unlike a relational database, does not entail changing multiple related tables. Hence, the best answer to be used here is a NoSQL database, like DynamoDB. When your business requires a low-latency response to high-traffic queries, taking advantage of a NoSQL system generally makes technical and economic sense.\n\nAmazon DynamoDB helps solve the problems that limit the relational system scalability by avoiding them. In DynamoDB, you design your schema specifically to make the most common and important queries as fast and as inexpensive as possible. Your data structures are tailored to the specific requirements of your business use cases.\n\nRemember that a relational database system does not scale well for the following reasons:\n\n- It normalizes data and stores it on multiple tables that require multiple queries to write to disk.\n\n- It generally incurs the performance costs of an ACID-compliant transaction system.\n\n- It uses expensive joins to reassemble required views of query results.\n\n\n\n\nFor DynamoDB, it scales well due to these reasons:\n\n- Its schema flexibility lets DynamoDB store complex hierarchical data within a single item. DynamoDB is not a totally schemaless database since the very definition of a schema is just the model or structure of your data.\n\n- Composite key design lets it store related items close together on the same table.\n\n\n\n\nAn Amazon RDS instance in Multi-AZ Deployments configuration and an Amazon Aurora database with Read Replicas are incorrect because both of them are a type of relational database.\n\nRedshift is incorrect because it is primarily used for OLAP systems.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-general-nosql-design.html\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-relational-modeling.html\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html\n\n\n\n\nAlso check the AWS Certified Solutions Architect Official Study Guide: Associate Exam 1st Edition and turn to page 161 which talks about NoSQL Databases.\n\n\n\n\nCheck out this Amazon DynamoDB Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-dynamodb/\n\n\n\n\nTutorials Dojo\'s AWS Certified Solutions Architect Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-certified-solutions-architect-associate/',
    },
    {
      questionNo: 29,
      questionText:
        'The company that you are working for has a highly available architecture consisting of an elastic load balancer and several EC2 instances configured with auto-scaling in three Availability Zones. You want to monitor your EC2 instances based on a particular metric, which is not readily available in CloudWatch.   \n\nWhich of the following is a custom metric in CloudWatch which you have to manually set up?',
      options: [
        {
          isCorrect: false,
          text: '​\nDisk Reads activity of an EC2 instance',
        },
        {
          isCorrect: false,
          text: '​\n\nNetwork packets out of an EC2 instance',
        },
        {
          isCorrect: false,
          text: '​\nCPU Utilization of an EC2 instance',
        },
        {
          isCorrect: true,
          text: '​\nMemory Utilization of an EC2 instance\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nCloudWatch has available Amazon EC2 Metrics for you to use for monitoring. CPU Utilization identifies the processing power required to run an application upon a selected instance. Network Utilization identifies the volume of incoming and outgoing network traffic to a single instance. Disk Reads metric is used to determine the volume of the data the application reads from the hard disk of the instance. This can be used to determine the speed of the application. However, there are certain metrics that are not readily available in CloudWatch such as memory utilization, disk space utilization, and many others which can be collected by setting up a custom metric.\n\nYou need to prepare a custom metric using CloudWatch Monitoring Scripts which is written in Perl. You can also install CloudWatch Agent to collect more system-level metrics from Amazon EC2 instances. Here's the list of custom metrics that you can set up:\n\n- Memory utilization\n- Disk swap utilization\n- Disk space utilization\n- Page file utilization\n- Log collection\n\n\n\n\n\n\n\nCPU Utilization of an EC2 instance, Disk Reads activity of an EC2 instance, and Network packets out of an EC2 instance are all incorrect because these metrics are readily available in CloudWatch by default.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html#using_put_script\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-cloudwatch/",
    },
    {
      questionNo: 30,
      questionText:
        'An application consists of multiple EC2 instances in different availability zones on a private subnet. The application uses a single NAT Gateway for downloading software patches from the Internet to the instances. There is a requirement to protect the application from a single point of failure when the NAT Gateway encounters a failure or if its availability zone goes down.\n\nHow should the Solutions Architect redesign the architecture to be more highly available and cost-effective?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nCreate two NAT Gateways in each availability zone. Configure the route table in each public subnet to ensure that instances use the NAT Gateway in the same availability zone.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCreate a NAT Gateway in each availability zone. Configure the route table in each private subnet to ensure that instances use the NAT Gateway in the same availability zone\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCreate a NAT Gateway in each availability zone. Configure the route table in each public subnet to ensure that instances use the NAT Gateway in the same availability zone.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCreate three NAT Gateways in each availability zone. Configure the route table in each private subnet to ensure that instances use the NAT Gateway in the same availability zone.',
        },
      ],
      explain:
        'Explanation\n\nA NAT Gateway is a highly available, managed Network Address Translation (NAT) service for your resources in a private subnet to access the Internet. NAT gateway is created in a specific Availability Zone and implemented with redundancy in that zone.\n\nYou must create a NAT gateway on a public subnet to enable instances in a private subnet to connect to the Internet or other AWS services, but prevent the Internet from initiating a connection with those instances.\n\nIf you have resources in multiple Availability Zones and they share one NAT gateway, and if the NAT gateway’s Availability Zone is down, resources in the other Availability Zones lose Internet access. To create an Availability Zone-independent architecture, create a NAT gateway in each Availability Zone and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone.\n\nHence, the correct answer is: Create a NAT Gateway in each availability zone. Configure the route table in each private subnet to ensure that instances use the NAT Gateway in the same availability zone.\n\nThe option that says: Create a NAT Gateway in each availability zone. Configure the route table in each public subnet to ensure that instances use the NAT Gateway in the same availability zone is incorrect because you should configure the route table in the private subnet and not the public subnet to associate the right instances in the private subnet.\n\nThe options that say: Create two NAT Gateways in each availability zone. Configure the route table in each public subnet to ensure that instances use the NAT Gateway in the same availability zone and Create three NAT Gateways in each availability zone. Configure the route table in each private subnet to ensure that instances use the NAT Gateway in the same availability zone are both incorrect because a single NAT Gateway in each availability zone is enough. NAT Gateway is already redundant in nature, meaning, AWS already handles any failures that occur in your NAT Gateway in an availability zone.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-vpc/',
    },
    {
      questionNo: 31,
      questionText:
        'You are a Solutions Architect in your company working with 3 DevOps Engineers under you. One of the engineers accidentally deleted a file hosted in Amazon S3 which has caused disruption of service.\n\nWhat can you do to prevent this from happening again?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nSet up a signed URL for all users.',
        },
        {
          isCorrect: false,
          text: '​\nCreate an IAM bucket policy that disables delete operation.',
        },
        {
          isCorrect: false,
          text: '​\n\nUse S3 Infrequently Accessed storage to store the data.',
        },
        {
          isCorrect: true,
          text:
            '​\nEnable S3 Versioning and Multi-Factor Authentication Delete on the bucket.\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nTo avoid accidental deletion in Amazon S3 bucket, you can:\n\n- Enable Versioning\n\n- Enable MFA (Multi-Factor Authentication) Delete\n\n\n\n\nVersioning is a means of keeping multiple variants of an object in the same bucket. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. With versioning, you can easily recover from both unintended user actions and application failures.\n\nIf the MFA (Multi-Factor Authentication) Delete is enabled, it requires additional authentication for either of the following operations:\n\n- Change the versioning state of your bucket\n\n- Permanently delete an object version\n\n\n\n\nUsing S3 Infrequently Accessed storage to store the data is incorrect. Switching your storage class to S3 Infrequent Access won't help mitigate accidental deletions.\n\nSetting up a signed URL for all users is incorrect. Signed URLs give you more control over access to your content, so this feature deals more on accessing rather than deletion.\n\nCreating an IAM bucket policy that disables delete operation is incorrect. If you create a bucket policy preventing deletion, other users won't be able to delete objects that should be deleted. You only want to prevent accidental deletion, not disable the action itself.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/",
    },
    {
      questionNo: 32,
      questionText:
        'In the VPC that you are managing, it has one EC2 instance with its data stored in its root volume. A 2nd level support engineer tried to stop the EC2 instance using the AWS CLI to save costs. However, he received an UnsupportedOperation error as a response.\n\nWhat might be the cause of this?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nThe EC2 instance was using EBS-backed root volumes hence, the instance cannot be stopped.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nAWS does not allow instances to be stopped through API calls.',
        },
        {
          isCorrect: false,
          text: '​\nThe EC2 instance has been hacked.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nThe EC2 instance was using an instance-store-backed root volume hence, the instance cannot be stopped.\n\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nWhen using an Instance store-backed root volume, any data on the instance store volumes persists as long as the instance is running, but this data is deleted when the instance is terminated (instance store-backed instances do not support the Stop action) or if it fails (such as if an underlying drive has issues).\n\nHence, the correct answer is the option that says: The EC2 instance was using an instance-store-backed root volume hence, the instance cannot be stopped.\n\nThe data in an instance store persists only during the lifetime of its associated instance. If an instance reboots (intentionally or unintentionally), data in the instance store persists. However, data in the instance store is lost under any of the following circumstances:\n\n- The underlying disk drive fails\n\n- The instance terminates\n\nTherefore, do not rely on instance store for valuable, long-term data. Instead, use more durable data storage such as Amazon S3, Amazon EBS, or Amazon EFS. When you stop or terminate an instance, every block of storage in the instance store is reset. Hence, your data cannot be accessed through the instance store of another instance.\n\nIf you create an AMI from an instance, the data on its instance store volumes aren't preserved and aren't present on the instance store volumes of the instances that you launch from the AMI. You can specify instance store volumes for an instance only when you launch it. You can't detach an instance store volume from one instance and attach it to a different instance.\n\nThe option that says: The EC2 instance was using EBS-backed root volumes hence, the instance cannot be stopped is incorrect because an EC2 instance with EBS-backed root volumes supports the stop operation.\n\nThe option that says: AWS does not allow instances to be stopped through API calls is incorrect because instances can be stopped using API calls as long as the instance is backed by an EBS root volume, otherwise, you will receive an UnsupportedOperation error as a response.\n\nThe option that says: The EC2 instance has been hacked is incorrect. Although it is remotely possible that someone got hold of your AWS security credentials, this reason is still far fetched and quite unlikely to happen. Based on the given scenario, the support engineer was still able to perform an AWS CLI command which means that his permission to call the API command to stop the instance was not restricted.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Storage.html\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-elastic-compute-cloud-amazon-ec2/",
    },
    {
      questionNo: 33,
      questionText:
        'A company has an On-Demand EC2 instance that is transferring large amounts of data to an Amazon S3 bucket in the same region. Your manager is worried about infrastructure cost considering the vast amounts of data being transferred to the bucket.\n\nWhat will you say to justify this architecture?',
      options: [
        {
          isCorrect: true,
          text:
            '​\nTransferring data from an EC2 instance to an S3 bucket in the same region has no cost at all.\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\nYou are only using an On-Demand EC2 instance so the cost will be lower than a Spot instance.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nYou are only using an On-Demand EC2 instance which is exactly the same price as Spot EC2 instance, launched by a persistent Spot request.',
        },
        {
          isCorrect: false,
          text:
            '​\nTransferring data from an EC2 instance to an S3 bucket in the same region has a 50% discount based on the AWS Pricing.',
        },
      ],
      explain:
        'Explanation\n\nTransferring data from an EC2 instance to Amazon S3, Amazon Glacier, Amazon DynamoDB, Amazon SES, Amazon SQS, or Amazon SimpleDB in the same AWS Region has no cost at all. Refer to the Amazon EC2 Pricing on the link below for reference.\n\nThe options that say: You are only using an On-Demand EC2 instance which is exactly the same price as Spot EC2 instance, launched by a persistent Spot request and You are only using an On-Demand EC2 instance so the cost will be lower than a Spot instance are incorrect since an On-Demand instance costs more than a Spot instance.\n\nThe option that says: Transferring data from an EC2 instance to an S3 bucket in the same region has a 50% discount based on the AWS Pricing is incorrect as there is no such thing as 50% discount when transferring data from an EC2 instance to an S3 bucket in the same region.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/',
    },
    {
      questionNo: 34,
      questionText:
        'A tech company has a CRM application hosted on an Auto Scaling group of On-Demand EC2 instances. The application is extensively used during office hours from 9 in the morning till 5 in the afternoon. Their users are complaining that the performance of the application is slow during the start of the day but then works normally after a couple of hours. \n\nWhich of the following can be done to ensure that the application works properly at the beginning of the day?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nSet up an Application Load Balancer (ALB) to your architecture to ensure that the traffic is properly distributed on the instances.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nConfigure a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nConfigure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nConfigure a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization.',
        },
      ],
      explain:
        'Explanation\n\nScaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application.\n\n\n\n\n\n\n\nTo configure your Auto Scaling group to scale based on a schedule, you create a scheduled action. The scheduled action tells Amazon EC2 Auto Scaling to perform a scaling action at specified times. To create a scheduled scaling action, you specify the start time when the scaling action should take effect, and the new minimum, maximum, and desired sizes for the scaling action. At the specified time, Amazon EC2 Auto Scaling updates the group with the values for minimum, maximum, and desired size specified by the scaling action. You can create scheduled actions for scaling one time only or for scaling on a recurring schedule.\n\nHence, configuring a Scheduled scaling policy for the Auto Scaling group to launch new instances before the start of the day is the correct answer. You need to configure a Scheduled scaling policy. This will ensure that the instances are already scaled up and ready before the start of the day since this is when the application is used the most.\n\nConfiguring a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the CPU utilization and configuring a Dynamic scaling policy for the Auto Scaling group to launch new instances based on the Memory utilization are both incorrect because although these are valid solutions, it is still better to configure a Scheduled scaling policy as you already know the exact peak hours of your application. By the time either the CPU or Memory hits a peak, the application already has performance issues, so you need to ensure the scaling is done beforehand using a Scheduled scaling policy.\n\nSetting up an Application Load Balancer (ALB) to your architecture to ensure that the traffic is properly distributed on the instances is incorrect. Although the Application load balancer can also balance the traffic, it cannot increase the instances based on demand.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\n\n\n\n\nCheck out this AWS Auto Scaling Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-auto-scaling/',
    },
    {
      questionNo: 35,
      questionText:
        'In a government agency that you are working for, you have been assigned to put confidential tax documents on AWS cloud. However, there is a concern from a security perspective on what can be put on AWS. \n\nWhat are the features in AWS that can ensure data security for your confidential documents? (Select TWO.)',
      options: [
        {
          isCorrect: true,
          text: '​\nS3 Server-Side Encryption\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nEBS On-Premises Data Encryption',
        },
        {
          isCorrect: false,
          text: '​\n\nS3 On-Premises Data Encryption',
        },
        {
          isCorrect: false,
          text: '​\nPublic Data Set Volume Encryption',
        },
        {
          isCorrect: true,
          text: '​\nS3 Client-Side Encryption\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nYou can secure the privacy of your data in AWS, both at rest and in-transit, through encryption. If your data is stored in EBS Volumes, you can enable EBS Encryption and if it is stored on Amazon S3, you can enable client-side and server-side encryption.\n\nPublic Data Set Volume Encryption is incorrect as public data sets are designed to be publicly accessible.\n\nEBS On-Premises Data Encryption and S3 On-Premises Data Encryption are both incorrect as there is no such thing as On-Premises Data Encryption for S3 and EBS as these services are in the AWS cloud and not on your on-premises network.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-public-data-sets.html\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/',
    },
    {
      questionNo: 36,
      questionText:
        'You are a Solutions Architect for a leading Enterprise Resource Planning (ERP) solutions provider and you are instructed to design and set up the architecture of your ERP application in AWS. Your manager instructed you to avoid using fully-managed AWS services and instead, only use specific services which allows you to access the underlying operating system for the resource. This is to allow the company to have a much better control of the underlying resources that their systems are using in the AWS cloud.   \n\nWhich of the following services should you choose to satisfy this requirement? (Select TWO.)',
      options: [
        {
          isCorrect: true,
          text: '​\nAmazon EMR\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon Athena',
        },
        {
          isCorrect: false,
          text: '​\nDynamoDB',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon Neptune',
        },
        {
          isCorrect: true,
          text: '​\nAmazon EC2\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nAmazon EC2 provides you access to the operating system of the instance that you created.\n\nAmazon EMR provides you a managed Hadoop framework that makes it easy, fast, and cost-effective to process vast amounts of data across dynamically scalable Amazon EC2 instances. You can access the operating system of these EC2 instances that were created by Amazon EMR.\n\nAmazon Athena, DynamoDB, and Amazon Neptune are incorrect as these are managed services, which means that AWS manages the underlying operating system and other server configurations that these databases use.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/ec2/\n\nhttps://aws.amazon.com/emr/\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/\n\n\n\n\nTutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-certified-solutions-architect-associate/",
    },
    {
      questionNo: 37,
      questionText:
        'You are using a combination of API Gateway and Lambda for the web services of your online web portal that is being accessed by hundreds of thousands of clients each day. Your company will be announcing a new revolutionary product and it is expected that your web portal will receive a massive number of visitors all around the globe. How can you protect your backend systems and applications from traffic spikes?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nManually upgrade the EC2 instances being used by API Gateway',
        },
        {
          isCorrect: false,
          text:
            '​\n\nAPI Gateway will automatically scale and handle massive traffic spikes so you do not have to do anything.',
        },
        {
          isCorrect: true,
          text: '​\n\nUse throttling limits in API Gateway\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nDeploy Multi-AZ in API Gateway with Read Replica',
        },
      ],
      explain:
        'Explanation\n\nAmazon API Gateway provides throttling at multiple levels including global and by a service call. Throttling limits can be set for standard rates and bursts. For example, API owners can set a rate limit of 1,000 requests per second for a specific method in their REST APIs, and also configure Amazon API Gateway to handle a burst of 2,000 requests per second for a few seconds.\n\nAmazon API Gateway tracks the number of requests per second. Any requests over the limit will receive a 429 HTTP response. The client SDKs generated by Amazon API Gateway retry calls automatically when met with this response.\n\nThe option that says: API Gateway will automatically scale and handle massive traffic spikes so you do not have to do anything is incorrect because although it can scale using AWS Edge locations, you still need to configure the throttling to further manage the bursts of your APIs.\n\nManually upgrading the EC2 instances being used by API Gateway is incorrect because API Gateway is a fully managed service and hence, you do not have access to its underlying resources.\n\nDeploying Multi-AZ in API Gateway with Read Replica is incorrect because RDS has Multi-AZ and Read Replica capabilities, and not API Gateway.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/api-gateway/faqs/#Throttling_and_Caching\n\n\n\n\nCheck out this Amazon API Gateway Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-api-gateway/',
    },
    {
      questionNo: 38,
      questionText:
        'You founded a tech startup that provides online training and software development courses to various students across the globe. Your team has developed an online portal in AWS where the students can log into and access the courses they are subscribed to.   \n\nSince you are in the early phases of the startup and the funding is still hard to come by, which service can help you manage the budgets for all your AWS resources?',
      options: [
        {
          isCorrect: false,
          text: '​\nCost Explorer',
        },
        {
          isCorrect: false,
          text: '​\nCost Allocation Tags',
        },
        {
          isCorrect: false,
          text: '​\nPayment History',
        },
        {
          isCorrect: true,
          text: '​\nAWS Budgets\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nAWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.\n\nBudgets can be tracked at the monthly, quarterly, or yearly level, and you can customize the start and end dates. You can further refine your budget to track costs associated with multiple dimensions, such as AWS service, linked account, tag, and others. Budget alerts can be sent via email and/or Amazon Simple Notification Service (SNS) topic.\n\nYou can also use AWS Budgets to set a custom reservation utilization target and receive alerts when your utilization drops below the threshold you define. RI utilization alerts support Amazon EC2, Amazon RDS, Amazon Redshift, and Amazon ElastiCache reservations.\n\nBudgets can be created and tracked from the AWS Budgets dashboard or via the Budgets API.\n\nCost Explorer is incorrect because it only helps you visualize and manage your AWS costs and usages over time. It offers a set of reports you can view data with for up to the last 13 months, forecast how much you're likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase. You use Cost Explorer to identify areas that need further inquiry and see trends to understand your costs.\n\nCost Allocation Tags is incorrect because it only eases the organization of your resource costs on your cost allocation report to make it easier for you to categorize and track your AWS costs.\n\nPayment History is incorrect because this option only provides a location where you can view the monthly invoices you receive from AWS. If your account isn't past due, the Payment History page shows only previous invoices and payment status.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/aws-cost-management/aws-budgets/\n\n\n\n\nCheck out this AWS Billing and Cost Management Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-billing-and-cost-management/",
    },
    {
      questionNo: 39,
      questionText:
        'A Solutions Architect is tasked to host a web application in a new VPC with private and public subnets. In order to do this, the Architect will need to deploy a new MySQL database server and a fleet of EC2 instances to host the application.\n\nIn which subnet should the Architect launch the new database server into?',
      options: [
        {
          isCorrect: false,
          text: '​\nEither public or private subnet',
        },
        {
          isCorrect: false,
          text: '​\nThe public subnet',
        },
        {
          isCorrect: false,
          text: '​\nIdeally be launched outside the Amazon VPC',
        },
        {
          isCorrect: true,
          text: '​\nThe private subnet\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nIn an ideal and secure VPC architecture, you launch the web servers or elastic load balancers in the public subnet and the database servers in the private subnet.\n\n\n\n\n\n\n\nThe private subnet is correct because it is more secure to launch your database in the private subnet to prevent other external and unauthorized users to access or attack your system.\n\nThe public subnet is incorrect because if you launch your database server in the public subnet, it will be publicly accessible all over the Internet which has a higher security risk.\n\nEither public or private subnet is incorrect since only the private subnet is the correct answer if you want to secure your database from external traffic.\n\nThe option that says: Ideally be launched outside the Amazon VPC is incorrect as there is no need to launch it outside the VPC. Having it run in a private subnet should address the security and networking concerns of your database.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/',
    },
    {
      questionNo: 40,
      questionText:
        'You are working as a Solutions Architect for a government project in which they are building an online portal to allow people to pay their taxes and claim their tax refunds online. Due to the confidentiality of data, the security policy requires that the application hosted in EC2 encrypts the data first before writing it to the disk for storage.   \n\nIn this scenario, which service would you use to meet this requirement?',
      options: [
        {
          isCorrect: true,
          text: '​\n\nAWS KMS API\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nEBS encryption',
        },
        {
          isCorrect: false,
          text: '​\n\nSecurity Token Service',
        },
        {
          isCorrect: false,
          text: '​\n\nElastic File System (EFS)',
        },
      ],
      explain:
        'Explanation\n\nAWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. The master keys that you create in AWS KMS are protected by FIPS 140-2 validated cryptographic modules. AWS KMS is integrated with most other AWS services that encrypt your data with encryption keys that you manage. AWS KMS is also integrated with AWS CloudTrail to provide encryption key usage logs to help meet your auditing, regulatory and compliance needs.\n\n\n\n\n\n\n\nThe scenario mentions that you have to encrypt the data before writing it to disk for storage. What this means is that you will have to temporarily store the data in memory and not persist it on the disk, then encrypt it on the fly before finally storing it. The end result would be an encrypted data in your disk EBS Volume, and the EBS Encryption would be the secondary layer of protection/encryption for your sensitive data.\n\nYou can configure your application to use the KMS API to encrypt all data before saving it to disk. Hence, AWS KMS API is the correct answer.\n\nSecurity Token Service is incorrect because AWS Security Token Service (STS) is a web service that enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users). It is not used for encrypting data unlike KMS.\n\nEBS encryption is incorrect because although EBS encryption provides additional security for the EBS volumes, the application could not use this service to encrypt or decrypt each individual data that it writes on the disk. It is better to use KMS API instead to automatically encrypt the data before saving it to disk for maximum security, rather than after.\n\nElastic File System (EFS) is incorrect because EFS is a storage service and does not provide encryption services unlike KMS API.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/kms/latest/developerguide/programming-top.html\n\nhttps://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys\n\n\n\n\nCheck out this AWS Key Management Service (KMS) Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-key-management-service-aws-kms/',
    },
    {
      questionNo: 41,
      questionText:
        'A suite of web applications is hosted in an Auto Scaling group of EC2 instances across three Availability Zones and is configured with default settings. There is an Application Load Balancer that forwards the request to the respective target group on the URL path. The scale-in policy has been triggered due to the low number of incoming traffic to the application.\n\nWhich EC2 instance will be the first one to be terminated by your Auto Scaling group?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nThe EC2 instance which has the least number of user sessions',
        },
        {
          isCorrect: false,
          text:
            '​\n\nThe EC2 instance which has been running for the longest time',
        },
        {
          isCorrect: true,
          text:
            '​\n\nThe EC2 instance launched from the oldest launch configuration\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nThe instance will be randomly selected by the Auto Scaling group',
        },
      ],
      explain:
        'Explanation\n\nThe default termination policy is designed to help ensure that your network architecture spans Availability Zones evenly. With the default termination policy, the behavior of the Auto Scaling group is as follows:\n\n1. If there are instances in multiple Availability Zones, choose the Availability Zone with the most instances and at least one instance that is not protected from scale in. If there is more than one Availability Zone with this number of instances, choose the Availability Zone with the instances that use the oldest launch configuration.\n\n2. Determine which unprotected instances in the selected Availability Zone use the oldest launch configuration. If there is one such instance, terminate it.\n\n3. If there are multiple instances to terminate based on the above criteria, determine which unprotected instances are closest to the next billing hour. (This helps you maximize the use of your EC2 instances and manage your Amazon EC2 usage costs.) If there is one such instance, terminate it.\n\n4. If there is more than one unprotected instance closest to the next billing hour, choose one of these instances at random.\n\nThe following flow diagram illustrates how the default termination policy works:\n\n\n\n\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#default-termination-policy\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html\n\n\n\n\nCheck out this AWS Auto Scaling Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-auto-scaling/',
    },
    {
      questionNo: 42,
      questionText:
        'A media company has an Amazon ECS Cluster, which uses the Fargate launch type, to host its news website. The database credentials should be supplied using environment variables, to comply with strict security compliance. As the Solutions Architect, you have to ensure that the credentials are secure and that they cannot be viewed in plaintext on the cluster itself.\n\nWhich of the following is the most suitable solution in this scenario that you can implement with minimal effort?',
      options: [
        {
          isCorrect: true,
          text:
            '​\n\nUse the AWS Systems Manager Parameter Store to keep the database credentials and then encrypt them using AWS KMS. Create an IAM Role for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition, which allows access to both KMS and the Parameter Store. Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of the Systems Manager Parameter Store parameter containing the sensitive data to present to the container.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nStore the database credentials in the ECS task definition file of the ECS Cluster and encrypt it with KMS. Store the task definition JSON file in a private S3 bucket and ensure that HTTPS is enabled on the bucket to encrypt the data in-flight. Create an IAM role to the ECS task definition script that allows access to the specific S3 bucket and then pass the --cli-input-json parameter when calling the ECS register-task-definition. Reference the task definition JSON file in the S3 bucket which contains the database credentials.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse the AWS Secrets Manager to store the database credentials and then encrypt them using AWS KMS. Create a resource-based policy for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition which allows access to both KMS and AWS Secrets Manager. Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of the Secrets Manager secret which contains the sensitive data, to present to the container.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nIn the ECS task definition file of the ECS Cluster, store the database credentials using Docker Secrets to centrally manage these sensitive data and securely transmit it to only those containers that need access to it. Secrets are encrypted during transit and at rest. A given secret is only accessible to those services which have been granted explicit access to it via IAM Role, and only while those service tasks are running.',
        },
      ],
      explain:
        'Explanation\n\nAmazon ECS enables you to inject sensitive data into your containers by storing your sensitive data in either AWS Secrets Manager secrets or AWS Systems Manager Parameter Store parameters and then referencing them in your container definition. This feature is supported by tasks using both the EC2 and Fargate launch types.\n\nSecrets can be exposed to a container in the following ways:\n\n- To inject sensitive data into your containers as environment variables, use the secrets container definition parameter.\n\n- To reference sensitive information in the log configuration of a container, use the secretOptions container definition parameter.\n\n\n\n\nWithin your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of either the Secrets Manager secret or Systems Manager Parameter Store parameter containing the sensitive data to present to the container. The parameter that you reference can be from a different Region than the container using it, but must be from within the same account.\n\nHence, the correct answer is the option that says: Use the AWS Systems Manager Parameter Store to keep the database credentials and then encrypt them using AWS KMS. Create an IAM Role for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition, which allows access to both KMS and the Parameter Store. Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of the Systems Manager Parameter Store parameter containing the sensitive data to present to the container.\n\nThe option that says: In the ECS task definition file of the ECS Cluster, store the database credentials using Docker Secrets to centrally manage these sensitive data and securely transmit it to only those containers that need access to it. Secrets are encrypted during transit and at rest. A given secret is only accessible to those services which have been granted explicit access to it via IAM Role, and only while those service tasks are running is incorrect because although you can use Docker Secrets to secure the sensitive database credentials, this feature is only applicable in Docker Swarm. In AWS, the recommended way to secure sensitive data is either through the use of Secrets Manager or Systems Manager Parameter Store.\n\nThe option that says: Store the database credentials in the ECS task definition file of the ECS Cluster and encrypt it with KMS. Store the task definition JSON file in a private S3 bucket and ensure that HTTPS is enabled on the bucket to encrypt the data in-flight. Create an IAM role to the ECS task definition script that allows access to the specific S3 bucket and then pass the --cli-input-json parameter when calling the ECS register-task-definition. Reference the task definition JSON file in the S3 bucket which contains the database credentials is incorrect because although the solution may work, it is not recommended to store sensitive credentials in S3. This entails a lot of overhead and manual configuration steps which can be simplified by simply using the Secrets Manager or Systems Manager Parameter Store.\n\nThe option that says: Use the AWS Secrets Manager to store the database credentials and then encrypt them using AWS KMS. Create a resource-based policy for your Amazon ECS task execution role (taskRoleArn) and reference it with your task definition which allows access to both KMS and AWS Secrets Manager. Within your container definition, specify secrets with the name of the environment variable to set in the container and the full ARN of the Secrets Manager secret which contains the sensitive data, to present to the container is incorrect because although the use of Secrets Manager in securing sensitive data in ECS is valid, using an IAM Role is a more suitable choice over a resource-based policy for the Amazon ECS task execution role.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html\n\nhttps://aws.amazon.com/blogs/mt/the-right-way-to-store-secrets-using-parameter-store/\n\n\n\n\nCheck out these Amazon ECS and AWS Systems Manager Cheat Sheets:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-container-service-amazon-ecs/\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-systems-manager/',
    },
    {
      questionNo: 43,
      questionText:
        'An online shopping platform is hosted on an Auto Scaling group of Spot EC2 instances and uses Amazon Aurora PostgreSQL as its database. There is a requirement to optimize your database workloads in your cluster where you have to direct the write operations of the production traffic to your high-capacity instances and point the reporting queries sent by your internal staff to the low-capacity instances.\n\nWhich is the most suitable configuration for your application as well as your Aurora database cluster to achieve this requirement?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nConfigure your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nDo nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCreate a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nIn your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries.',
        },
      ],
      explain:
        "Explanation\n\nAmazon Aurora typically involves a cluster of DB instances instead of a single instance. Each connection is handled by a specific DB instance. When you connect to an Aurora cluster, the host name and port that you specify point to an intermediate handler called an endpoint. Aurora uses the endpoint mechanism to abstract these connections. Thus, you don't have to hardcode all the hostnames or write your own logic for load-balancing and rerouting connections when some DB instances aren't available.\n\nFor certain Aurora tasks, different instances or groups of instances perform different roles. For example, the primary instance handles all data definition language (DDL) and data manipulation language (DML) statements. Up to 15 Aurora Replicas handle read-only query traffic.\n\n\n\n\n\n\n\nUsing endpoints, you can map each connection to the appropriate instance or group of instances based on your use case. For example, to perform DDL statements you can connect to whichever instance is the primary instance. To perform queries, you can connect to the reader endpoint, with Aurora automatically performing load-balancing among all the Aurora Replicas. For clusters with DB instances of different capacities or configurations, you can connect to custom endpoints associated with different subsets of DB instances. For diagnosis or tuning, you can connect to a specific instance endpoint to examine details about a specific DB instance.\n\nThe custom endpoint provides load-balanced database connections based on criteria other than the read-only or read-write capability of the DB instances. For example, you might define a custom endpoint to connect to instances that use a particular AWS instance class or a particular DB parameter group. Then you might tell particular groups of users about this custom endpoint. For example, you might direct internal users to low-capacity instances for report generation or ad hoc (one-time) querying, and direct production traffic to high-capacity instances. Hence, creating a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries is the correct answer.\n\nConfiguring your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas is incorrect because although it is true that a reader endpoint enables your Aurora database to automatically perform load-balancing among all the Aurora Replicas, it is quite limited to doing read operations only. You still need to use a custom endpoint to load-balance the database connections based on the specified criteria.\n\nThe option that says: In your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries is incorrect because a cluster endpoint (also known as a writer endpoint) for an Aurora DB cluster simply connects to the current primary DB instance for that DB cluster. This endpoint can perform write operations in the database such as DDL statements, which is perfect for handling production traffic but not suitable for handling queries for reporting since there will be no write database operations that will be sent. Moreover, the endpoint does not point to lower-capacity or high-capacity instances as per the requirement. A better solution for this is to use a custom endpoint.\n\nThe option that says: Do nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances is incorrect because Aurora does not do this by default. You have to create custom endpoints in order to accomplish this requirement.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html\n\n\n\n\nCheck out this Amazon Aurora Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-aurora/",
    },
    {
      questionNo: 44,
      questionText:
        'You are managing a suite of applications in your on-premises network which are using trusted IP addresses that your partners and customers have whitelisted in their firewalls. There is a requirement to migrate these applications to AWS without requiring your partners and customers to change their IP address whitelists.   \n\nWhich of the following is the most suitable solution to properly migrate your applications?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nSet up an IP match condition using a CloudFront web distribution and AWS WAF to whitelist a specific IP address range in your VPC.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSubmit an AWS Request Form to migrate the IP address range that you own to your AWS Account.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCreate a Route Origin Authorization (ROA) then once done, provision and advertise your whitelisted IP address range to your AWS account.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up a list of Elastic IP addresses to map the whitelisted IP address range in your on-premises network.',
        },
      ],
      explain:
        'Explanation\n\nYou can bring part or all of your public IPv4 address range from your on-premises network to your AWS account. You continue to own the address range, but AWS advertises it on the Internet. After you bring the address range to AWS, it appears in your account as an address pool. You can create an Elastic IP address from your address pool and use it with your AWS resources, such as EC2 instances, NAT gateways, and Network Load Balancers. This is also called "Bring Your Own IP Addresses (BYOIP)".\n\nTo ensure that only you can bring your address range to your AWS account, you must authorize Amazon to advertise the address range and provide proof that you own the address range.\n\nA Route Origin Authorization (ROA) is a document that you can create through your Regional internet registry (RIR), such as the American Registry for Internet Numbers (ARIN) or Réseaux IP Européens Network Coordination Centre (RIPE). It contains the address range, the ASNs that are allowed to advertise the address range, and an expiration date. Hence, Option 3 is the correct answer.\n\nThe ROA authorizes Amazon to advertise an address range under a specific AS number. However, it does not authorize your AWS account to bring the address range to AWS. To authorize your AWS account to bring an address range to AWS, you must publish a self-signed X509 certificate in the RDAP remarks for the address range. The certificate contains a public key, which AWS uses to verify the authorization-context signature that you provide. You should keep your private key secure and use it to sign the authorization-context message.\n\nSetting up a list of Elastic IP addresses to map the whitelisted IP address range in your on-premises network is incorrect because you cannot map the IP address of your on-premises network, which you are migrating to AWS, to an EIP address of your VPC. To satisfy the requirement, you must authorize Amazon to advertise the address range that you own.\n\nSetting up an IP match condition using a CloudFront web distribution and AWS WAF to whitelist a specific IP address range in your VPC is incorrect because the IP match condition in CloudFront is primarily used in allowing or blocking the incoming web requests based on the IP addresses that the requests originate from. This is the opposite of what is being asked in the scenario, where you have to migrate your suite of applications from your on-premises network and advertise the address range that you own in your VPC.\n\nSubmitting an AWS Request Form to migrate the IP address range that you own to your AWS Account is incorrect because you don\'t need to submit an AWS request in order to do this. You can simply create a Route Origin Authorization (ROA) then once done, provision and advertise your whitelisted IP address range to your AWS account.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html',
    },
    {
      questionNo: 45,
      questionText:
        'You are leading a software development team which uses serverless computing with AWS Lambda to build and run applications without having to set up or manage servers. You have a Lambda function that connects to a MongoDB Atlas, which is a popular Database as a Service (DBaaS) platform and also uses a third party API to fetch certain data for your application. You instructed one of your junior developers to create the environment variables for the MongoDB database hostname, username, and password as well as the API credentials that will be used by the Lambda function for DEV, SIT, UAT and PROD environments.\n\nConsidering that the Lambda function is storing sensitive database and API credentials, how can you secure this information to prevent other developers in your team, or anyone, from seeing these credentials in plain text? Select the best option that provides the maximum security.',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nAWS Lambda does not provide encryption for the environment variables. Deploy your code to an EC2 instance instead.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nThere is no need to do anything because, by default, AWS Lambda already encrypts the environment variables using the AWS Key Management Service.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nEnable SSL encryption that leverages on AWS CloudHSM to store and encrypt the sensitive information.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCreate a new KMS key and use it to enable encryption helpers that leverage on AWS Key Management Service to store and encrypt the sensitive information.\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nWhen you create or update Lambda functions that use environment variables, AWS Lambda encrypts them using the AWS Key Management Service. When your Lambda function is invoked, those values are decrypted and made available to the Lambda code.\n\nThe first time you create or update Lambda functions that use environment variables in a region, a default service key is created for you automatically within AWS KMS. This key is used to encrypt environment variables. However, if you wish to use encryption helpers and use KMS to encrypt environment variables after your Lambda function is created, you must create your own AWS KMS key and choose it instead of the default key. The default key will give errors when chosen. Creating your own key gives you more flexibility, including the ability to create, rotate, disable, and define access controls, and to audit the encryption keys used to protect your data.\n\n\n\n\n\n\n\nThe option that says: There is no need to do anything because, by default, AWS Lambda already encrypts the environment variables using the AWS Key Management Service is incorrect because although Lambda encrypts the environment variables in your function by default, the sensitive information would still be visible to other users who have access to the Lambda console. This is because Lambda uses a default KMS key to encrypt the variables, which is usually accessible by other users. The best option in this scenario is to use encryption helpers to secure your environment variables.\n\nThe option that says: Enable SSL encryption that leverages on AWS CloudHSM to store and encrypt the sensitive information is also incorrect since enabling SSL would encrypt data only when in-transit. Your other teams would still be able to view the plaintext at-rest. Use AWS KMS instead.\n\nThe option that says: AWS Lambda does not provide encryption for the environment variables. Deploy your code to an EC2 instance instead is incorrect since, as mentioned, Lambda does provide encryption functionality of environment variables.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/env_variables.html#env_encrypt\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/tutorial-env_console.html\n\n\n\n\nCheck out this AWS Lambda Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-lambda/',
    },
    {
      questionNo: 46,
      questionText:
        'You have a requirement to make sure that an On-Demand EC2 instance can only be accessed from this IP address (110.238.98.71) via an SSH connection. Which configuration below will satisfy this requirement?',
      options: [
        {
          isCorrect: true,
          text:
            '​\nSecurity Group Inbound Rule: Protocol – TCP. Port Range – 22, Source 110.238.98.71/32\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\nSecurity Group Inbound Rule: Protocol – TCP. Port Range – 22, Source 110.238.98.71/0',
        },
        {
          isCorrect: false,
          text:
            '​\nSecurity Group Inbound Rule: Protocol – UDP, Port Range – 22, Source 110.238.98.71/0',
        },
        {
          isCorrect: false,
          text:
            '​\nSecurity Group Inbound Rule: Protocol – UDP, Port Range – 22, Source 110.238.98.71/32',
        },
      ],
      explain:
        'Explanation\n\nThe SSH protocol uses TCP and port 22. Hence, Protocol – UDP, Port Range – 22, Source 110.238.98.71/32 and Protocol – UDP, Port Range – 22, Source 110.238.98.71/0 are incorrect as they are using UDP.\n\nThe following two options: Protocol – TCP, Port Range – 22, Source 110.238.98.71/32 and Protocol – TCP, Port Range – 22, Source 110.238.98.71/0 have one major difference and that is their CIDR block.\n\nThe requirement is to only allow the individual IP of the client and not the entire network. Therefore, the proper CIDR notation should be used. The /32 denotes one IP address and the /0 refers to the entire network. That is why Protocol – TCP, Port Range – 22, Source 110.238.98.71/0 is incorrect as it allowed the entire network instead of a single IP.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html#security-group-rules',
    },
    {
      questionNo: 47,
      questionText:
        'A tech company that you are working for has undertaken a Total Cost Of Ownership (TCO) analysis evaluating the use of Amazon S3 versus acquiring more storage hardware. The result was that all 1200 employees would be granted access to use Amazon S3 for storage of their personal documents.\n\nWhich of the following will you need to consider so you can set up a solution that incorporates single sign-on feature from your corporate AD or LDAP directory and also restricts access for each individual user to a designated user folder in an S3 bucket? (Select TWO.)',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nMap each individual user to a designated user folder in S3 using Amazon WorkDocs to access their personal documents.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse 3rd party Single Sign-On solutions such as Atlassian Crowd, OKTA, OneLogin and many others.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nConfigure an IAM role and an IAM Policy to access the bucket.\n\n(Correct)',
        },
        {
          isCorrect: true,
          text:
            '​\n\nSet up a Federation proxy or an Identity provider, and use AWS Security Token Service to generate temporary tokens.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up a matching IAM user for each of the 1200 users in your corporate directory that needs access to a folder in the S3 bucket.',
        },
      ],
      explain:
        "Explanation\n\nThe question refers to one of the common scenarios for temporary credentials in AWS. Temporary credentials are useful in scenarios that involve identity federation, delegation, cross-account access, and IAM roles. In this example, it is called enterprise identity federation considering that you also need to set up a single sign-on (SSO) capability.\n\nThe correct answers are:\n\n- Setup a Federation proxy or an Identity provider\n\n- Setup an AWS Security Token Service to generate temporary tokens\n\n- Configure an IAM role and an IAM Policy to access the bucket.\n\nIn an enterprise identity federation, you can authenticate users in your organization's network, and then provide those users access to AWS without creating new AWS identities for them and requiring them to sign in with a separate user name and password. This is known as the single sign-on (SSO) approach to temporary access. AWS STS supports open standards like Security Assertion Markup Language (SAML) 2.0, with which you can use Microsoft AD FS to leverage your Microsoft Active Directory. You can also use SAML 2.0 to manage your own solution for federating user identities.\n\nUsing 3rd party Single Sign-On solutions such as Atlassian Crowd, OKTA, OneLogin and many others is incorrect since you don't have to use 3rd party solutions to provide the access. AWS already provides the necessary tools that you can use in this situation.\n\nMapping each individual user to a designated user folder in S3 using Amazon WorkDocs to access their personal documents is incorrect as there is no direct way of integrating Amazon S3 with Amazon WorkDocs for this particular scenario. Amazon WorkDocs is simply a fully managed, secure content creation, storage, and collaboration service. With Amazon WorkDocs, you can easily create, edit, and share content. And because it’s stored centrally on AWS, you can access it from anywhere on any device.\n\nSetting up a matching IAM user for each of the 1200 users in your corporate directory that needs access to a folder in the S3 bucket is incorrect since creating that many IAM users would be unnecessary. Also, you want the account to integrate with your AD or LDAP directory, hence, IAM Users does not fit these criteria.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\n\nhttps://aws.amazon.com/blogs/security/writing-iam-policies-grant-access-to-user-specific-folders-in-an-amazon-s3-bucket/\n\n\n\n\nCheck out this AWS IAM Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-identity-and-access-management-iam/",
    },
    {
      questionNo: 48,
      questionText:
        'There was an incident in your production environment where the user data stored in the S3 bucket has been accidentally deleted by one of the Junior DevOps Engineers. The issue was escalated to your manager and after a few days, you were instructed to improve the security and protection of your AWS resources.   \n\nWhat combination of the following options will protect the S3 objects in your bucket from both accidental deletion and overwriting? (Select TWO.)',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nProvide access to S3 data strictly through pre-signed URL only',
        },
        {
          isCorrect: false,
          text: '​\n\nEnable Amazon S3 Intelligent-Tiering',
        },
        {
          isCorrect: true,
          text: '​\nEnable Versioning\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\nDisallow S3 Delete using an IAM bucket policy',
        },
        {
          isCorrect: true,
          text: '​\nEnable Multi-Factor Authentication Delete\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nBy using Versioning and enabling MFA (Multi-Factor Authentication) Delete, you can secure and recover your S3 objects from accidental deletion or overwrite.\n\nVersioning is a means of keeping multiple variants of an object in the same bucket. Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. With versioning, you can easily recover from both unintended user actions and application failures.\n\nYou can also optionally add another layer of security by configuring a bucket to enable MFA (Multi-Factor Authentication) Delete, which requires additional authentication for either of the following operations:\n\n- Change the versioning state of your bucket\n\n- Permanently delete an object version\n\n\n\n\nMFA Delete requires two forms of authentication together:\n\n- Your security credentials\n\n- The concatenation of a valid serial number, a space, and the six-digit code displayed on an approved authentication device\n\n\n\n\nProviding access to S3 data strictly through pre-signed URL only is incorrect since a pre-signed URL gives access to the object identified in the URL. Pre-signed URLs are useful when customers perform an object upload to your S3 bucket, but does not help in preventing accidental deletes.\n\nDisallowing S3 Delete using an IAM bucket policy is incorrect since you still want users to be able to delete objects in the bucket, and you just want to prevent accidental deletions. Disallowing S3 Delete using an IAM bucket policy will restrict all delete operations to your bucket.\n\nEnabling Amazon S3 Intelligent-Tiering is incorrect since S3 intelligent tiering does not help in this situation.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-s3/',
    },
    {
      questionNo: 49,
      questionText:
        'A company has a hybrid cloud architecture that connects their on-premises data center and cloud infrastructure in AWS. They require a durable storage backup for their corporate documents stored on-premises and a local cache that provides low latency access to their recently accessed data to reduce data egress charges. The documents must be stored to and retrieved from AWS via the Server Message Block (SMB) protocol. These files must immediately be accessible within minutes for six months and archived for another decade to meet the data compliance.\n\nWhich of the following is the best and most cost-effective approach to implement in this scenario?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nLaunch a new tape gateway that connects to your on-premises data center using AWS Storage Gateway. Upload the documents to the tape gateway and set up a lifecycle policy to move the data into Glacier for archival.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse AWS Snowmobile to migrate all of the files from the on-premises network. Upload the documents to an S3 bucket and set up a lifecycle policy to move the data into Glacier for archival.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nLaunch a new file gateway that connects to your on-premises data center using AWS Storage Gateway. Upload the documents to the file gateway and set up a lifecycle policy to move the data into Glacier for data archival.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nEstablish a Direct Connect connection to integrate your on-premises network to your VPC. Upload the documents on Amazon EBS Volumes and use a lifecycle policy to automatically move the EBS snapshots to an S3 bucket, and then later to Glacier for archival.',
        },
      ],
      explain:
        "Explanation\n\nA file gateway supports a file interface into Amazon Simple Storage Service (Amazon S3) and combines a service and a virtual software appliance. By using this combination, you can store and retrieve objects in Amazon S3 using industry-standard file protocols such as Network File System (NFS) and Server Message Block (SMB). The software appliance, or gateway, is deployed into your on-premises environment as a virtual machine (VM) running on VMware ESXi, Microsoft Hyper-V, or Linux Kernel-based Virtual Machine (KVM) hypervisor.\n\n\n\n\n\n\n\nThe gateway provides access to objects in S3 as files or file share mount points. With a file gateway, you can do the following:\n\n- You can store and retrieve files directly using the NFS version 3 or 4.1 protocol.\n\n- You can store and retrieve files directly using the SMB file system version, 2 and 3 protocol.\n\n- You can access your data directly in Amazon S3 from any AWS Cloud application or service.\n\n- You can manage your Amazon S3 data using lifecycle policies, cross-region replication, and versioning. You can think of a file gateway as a file system mount on S3.\n\nAWS Storage Gateway supports the Amazon S3 Standard, Amazon S3 Standard-Infrequent Access, Amazon S3 One Zone-Infrequent Access and Amazon Glacier storage classes. When you create or update a file share, you have the option to select a storage class for your objects. You can either choose the Amazon S3 Standard or any of the infrequent access storage classes such as S3 Standard IA or S3 One Zone IA. Objects stored in any of these storage classes can be transitioned to Amazon Glacier using a Lifecycle Policy.\n\nAlthough you can write objects directly from a file share to the S3-Standard-IA or S3-One Zone-IA storage class, it is recommended that you use a Lifecycle Policy to transition your objects rather than write directly from the file share, especially if you're expecting to update or delete the object within 30 days of archiving it.\n\nTherefore, the correct answer is: Launch a new file gateway that connects to your on-premises data center using AWS Storage Gateway. Upload the documents to the file gateway and set up a lifecycle policy to move the data into Glacier for data archival.\n\nThe option that says: Launch a new tape gateway that connects to your on-premises data center using AWS Storage Gateway. Upload the documents to the tape gateway and set up a lifecycle policy to move the data into Glacier for archival is incorrect because although tape gateways provide cost-effective and durable archive backup data in Amazon Glacier, it does not meet the criteria of being retrievable immediately within minutes. It also doesn't maintain a local cache that provides low latency access to the recently accessed data and reduce data egress charges. Thus, it is still better to set up a file gateway instead.\n\nThe option that says: Establish a Direct Connect connection to integrate your on-premises network to your VPC. Upload the documents on Amazon EBS Volumes and use a lifecycle policy to automatically move the EBS snapshots to an S3 bucket, and then later to Glacier for archival is incorrect because EBS Volumes are not as durable compared with S3 and it would be more cost-efficient if you directly store the documents to an S3 bucket. An alternative solution is to use AWS Direct Connect with AWS Storage Gateway to create a connection for high-throughput workload needs, providing a dedicated network connection between your on-premises file gateway and AWS. But this solution is using EBS, hence, this option is still wrong.\n\nThe option that says: Use AWS Snowmobile to migrate all of the files from the on-premises network. Upload the documents to an S3 bucket and set up a lifecycle policy to move the data into Glacier for archival is incorrect because Snowmobile is mainly used to migrate the entire data of an on-premises data center to AWS. This is not a suitable approach as the company still has a hybrid cloud architecture which means that they will still use their on-premises data center along with their AWS cloud infrastructure.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\nhttps://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/\n\n\n\n\nTutorials Dojo's AWS Certified SysOps Administrator Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-certified-sysops-administrator-associate/",
    },
    {
      questionNo: 50,
      questionText:
        'A cryptocurrency trading platform is using an API built in AWS Lambda and API Gateway. Due to the recent news and rumors about the upcoming price surge of Bitcoin, Ethereum and other cryptocurrencies, it is expected that the trading platform would have a significant increase in site visitors and new users in the coming days ahead.\n\nIn this scenario, how can you protect the backend systems of the platform from traffic spikes?',
      options: [
        {
          isCorrect: true,
          text:
            '​\n\nEnable throttling limits and result caching in API Gateway.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nMove the Lambda function in a VPC.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSwitch from using AWS Lambda and API Gateway to a more scalable and highly available architecture using EC2 instances, ELB, and Auto Scaling.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse CloudFront in front of the API Gateway to act as a cache.',
        },
      ],
      explain:
        'Explanation\n\nAmazon API Gateway provides throttling at multiple levels including global and by service call. Throttling limits can be set for standard rates and bursts. For example, API owners can set a rate limit of 1,000 requests per second for a specific method in their REST APIs, and also configure Amazon API Gateway to handle a burst of 2,000 requests per second for a few seconds. Amazon API Gateway tracks the number of requests per second. Any request over the limit will receive a 429 HTTP response. The client SDKs generated by Amazon API Gateway retry calls automatically when met with this response. Hence, enabling throttling limits and result caching in API Gateway is the correct answer.\n\nYou can add caching to API calls by provisioning an Amazon API Gateway cache and specifying its size in gigabytes. The cache is provisioned for a specific stage of your APIs. This improves performance and reduces the traffic sent to your back end. Cache settings allow you to control the way the cache key is built and the time-to-live (TTL) of the data stored for each method. Amazon API Gateway also exposes management APIs that help you invalidate the cache for each stage.\n\n\n\n\n\n\n\nThe option that says: Switch from using AWS Lambda and API Gateway to a more scalable and highly available architecture using EC2 instances, ELB, and Auto Scaling is incorrect since there is no need to transfer your applications to other services.\n\nUsing CloudFront in front of the API Gateway to act as a cache is incorrect because CloudFront only speeds up content delivery which provides a better latency experience for your users. It does not help much for the backend.\n\nMoving the Lambda function in a VPC is incorrect because this answer is irrelevant to what is being asked. A VPC is your own virtual private cloud where you can launch AWS services.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/api-gateway/faqs/\n\n\n\n\nCheck out this Amazon API Gateway Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-api-gateway/\n\n\n\n\nHere is an in-depth tutorial on Amazon API Gateway:\n\nhttps://youtu.be/XwfpPEFHKtQ',
    },
    {
      questionNo: 51,
      questionText:
        'A Solutions Architect is hosting a website in an Amazon S3 bucket named tutorialsdojo. The users load the website using the following URL: http://tutorialsdojo.s3-website-us-east-1.amazonaws.com and there is a new requirement to add a JavaScript on the webpages in order to make authenticated HTTP GET requests against the same bucket by using the Amazon S3 API endpoint (tutorialsdojo.s3.amazonaws.com). Upon testing, you noticed that the web browser blocks JavaScript from allowing those requests.\n\nWhich of the following options is the MOST suitable solution that you should implement for this scenario?',
      options: [
        {
          isCorrect: true,
          text:
            '​\n\nEnable Cross-origin resource sharing (CORS) configuration in the bucket.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nEnable Cross-Zone Load Balancing.',
        },
        {
          isCorrect: false,
          text: '​\n\nEnable Cross-Region Replication (CRR).',
        },
        {
          isCorrect: false,
          text: '​\n\nEnable cross-account access.',
        },
      ],
      explain:
        'Explanation\n\nCross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. With CORS support, you can build rich client-side web applications with Amazon S3 and selectively allow cross-origin access to your Amazon S3 resources.\n\n\n\n\n\n\n\nSuppose that you are hosting a website in an Amazon S3 bucket named your-website and your users load the website endpoint http://your-website.s3-website-us-east-1.amazonaws.com. Now you want to use JavaScript on the webpages that are stored in this bucket to be able to make authenticated GET and PUT requests against the same bucket by using the Amazon S3 API endpoint for the bucket, your-website.s3.amazonaws.com. A browser would normally block JavaScript from allowing those requests, but with CORS you can configure your bucket to explicitly enable cross-origin requests from your-website.s3-website-us-east-1.amazonaws.com.\n\nIn this scenario, you can solve the issue by enabling the CORS in the S3 bucket. Hence, enabling Cross-origin resource sharing (CORS) configuration in the bucket is the correct answer.\n\nEnabling cross-account access is incorrect because cross-account access is a feature in IAM and not in Amazon S3.\n\nEnabling Cross-Zone Load Balancing is incorrect because Cross-Zone Load Balancing is only used in ELB and not in S3.\n\nEnabling Cross-Region Replication (CRR) is incorrect because CRR is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions.\n\n\n\n\nReferences:\n\nhttp://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/ManageCorsUsing.html',
    },
    {
      questionNo: 52,
      questionText:
        'Your cloud architecture is composed of Linux and Windows EC2 instances which process high volumes of financial data 24 hours a day, 7 days a week. To ensure high availability of your systems, you are required to monitor the memory and disk utilization of all of your instances.   \n\nWhich of the following is the most suitable monitoring solution to implement?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nUse Amazon Inspector and install the Inspector agent to all of your EC2 instances.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nInstall the CloudWatch agent to all of your EC2 instances which gathers the memory and disk utilization data. View the custom metrics in the Amazon CloudWatch console.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUse the default CloudWatch configuration to your EC2 instances where the memory and disk utilization metrics are already available. Install the AWS Systems Manager (SSM) Agent to all of your EC2 instances.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nEnable the Enhanced Monitoring option in EC2 and install CloudWatch agent to all of your EC2 instances to be able to view the memory and disk utilization in the CloudWatch dashboard.',
        },
      ],
      explain:
        'Explanation\n\nCloudWatch has available Amazon EC2 Metrics for you to use for monitoring CPU utilization, Network utilization, Disk performance, and Disk Reads/Writes. In case that you need to monitor the below items, you need to prepare a custom metric using a Perl or other shell script, as there are no ready to use metrics for these:\n\nMemory utilization\n\ndisk swap utilization\n\ndisk space utilization\n\npage file utilization\n\nlog collection\n\nTake note that there is a multi-platform CloudWatch agent which can be installed on both Linux and Windows-based instances. You can use a single agent to collect both system metrics and log files from Amazon EC2 instances and on-premises servers. This agent supports both Windows Server and Linux and enables you to select the metrics to be collected, including sub-resource metrics such as per-CPU core. It is recommended that you use the new agent instead of the older monitoring scripts to collect metrics and logs.\n\n\n\n\n\n\n\nThe option that says: Use the default CloudWatch configuration to your EC2 instances where the memory and disk utilization metrics are already available. Install the AWS Systems Manager (SSM) Agent to all of your EC2 instances is incorrect because, by default, CloudWatch does not automatically provide memory and disk utilization metrics of your instances. You have to set up custom CloudWatch metrics to monitor the memory, disk swap, disk space and page file utilization of your instances.\n\nThe option that says: Enable the Enhanced Monitoring option in EC2 and install CloudWatch agent to all of your EC2 instances to be able to view the memory and disk utilization in the CloudWatch dashboard is incorrect because Enhanced Monitoring is a feature of RDS and not of CloudWatch.\n\nUsing Amazon Inspector and installing the Inspector agent to all of your EC2 instances is incorrect because Amazon Inspector is an automated security assessment service that helps you test the network accessibility of your Amazon EC2 instances and the security state of your applications running on the instances. It does not provide a custom metric to track the memory and disk utilization of each and every EC2 instance in your VPC.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html#using_put_script\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/\n\n\n\n\nCloudWatch Agent vs SSM Agent vs Custom Daemon Scripts:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-cloudwatch-agent-vs-ssm-agent-vs-custom-daemon-scripts/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/',
    },
    {
      questionNo: 53,
      questionText:
        'You have a new e-commerce web application written in Angular framework which is deployed to a fleet of EC2 instances behind an Application Load Balancer. You configured the load balancer to perform health checks on these EC2 instances.\n\nWhat will happen if one of these EC2 instances failed the health checks?',
      options: [
        {
          isCorrect: false,
          text:
            '​\nThe EC2 instance is replaced automatically by the Application Load Balancer.',
        },
        {
          isCorrect: true,
          text:
            '​\nThe Application Load Balancer stops sending traffic to the instance that failed its health check.\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\nThe EC2 instance gets quarantined by the Application Load Balancer for root cause analysis.',
        },
        {
          isCorrect: false,
          text:
            '​\nThe EC2 instance gets terminated automatically by the Application Load Balancer.',
        },
      ],
      explain:
        'Explanation\n\nIn case that one of the EC2 instances failed a health check, the Application Load Balancer stops sending traffic to that instance.\n\nYour Application Load Balancer periodically sends requests to its registered targets to test their status. These tests are called health checks. Each load balancer node routes requests only to the healthy targets in the enabled Availability Zones for the load balancer. Each load balancer node checks the health of each target, using the health check settings for the target group with which the target is registered. After your target is registered, it must pass one health check to be considered healthy. After each health check is completed, the load balancer node closes the connection that was established for the health check.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html\n\n\n\n\nCheck out this AWS Elastic Load Balancing (ELB) Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-elastic-load-balancing-elb/\n\n\n\n\nEC2 Instance Health Check vs ELB Health Check vs Auto Scaling and Custom Health Check:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-ec2-instance-health-check-vs-elb-health-check-vs-auto-scaling-and-custom-health-check-2/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/',
    },
    {
      questionNo: 54,
      questionText:
        'A Solutions Architect is working for a company which has multiple VPCs in various AWS regions. The Architect is assigned to set up a logging system which will track all of the changes made to their AWS resources in all regions, including the configurations made in IAM, CloudFront, AWS WAF, and Route 53. In order to pass the compliance requirements, the solution must ensure the security, integrity, and durability of the log data. It should also provide an event history of all API calls made in AWS Management Console and AWS CLI.\n\nWhich of the following solutions is the best fit for this scenario?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nSet up a new CloudWatch trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nSet up a new CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up a new CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --no-include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up a new CloudWatch trail in a new S3 bucket using the CloudTrail console and also pass the --is-multi-region-trail parameter then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.',
        },
      ],
      explain:
        'Explanation\n\nAn event in CloudTrail is the record of an activity in an AWS account. This activity can be an action taken by a user, role, or service that is monitorable by CloudTrail. CloudTrail events provide a history of both API and non-API account activity made through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. There are two types of events that can be logged in CloudTrail: management events and data events. By default, trails log management events, but not data events.\n\n\n\n\n\n\n\nA trail can be applied to all regions or a single region. As a best practice, create a trail that applies to all regions in the AWS partition in which you are working. This is the default setting when you create a trail in the CloudTrail console.\n\nFor most services, events are recorded in the region where the action occurred. For global services such as AWS Identity and Access Management (IAM), AWS STS, Amazon CloudFront, and Route 53, events are delivered to any trail that includes global services, and are logged as occurring in US East (N. Virginia) Region.\n\nIn this scenario, the company requires a secure and durable logging solution that will track all of the activities of all AWS resources on all regions. CloudTrail can be used for this case with multi-region trail enabled, however, it will only cover the activities of the regional services (EC2, S3, RDS etc.) and not for global services such as IAM, CloudFront, AWS WAF, and Route 53. In order to satisfy the requirement, you have to add the --include-global-service-events parameter in your AWS CLI command.\n\nThe option that says: Set up a new CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies is correct because it provides security, integrity, and durability to your log data and in addition, it has the -include-global-service-events parameter enabled which will also include activity from global services such as IAM, Route 53, AWS WAF, and CloudFront.\n\nThe option that says: Set up a new CloudWatch trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies is incorrect because you need to use CloudTrail instead of CloudWatch.\n\nThe option that says: Set up a new CloudWatch trail in a new S3 bucket using the CloudTrail console and also pass the --is-multi-region-trail parameter then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies is incorrect because you need to use CloudTrail instead of CloudWatch. In addition, the --include-global-service-events parameter is also missing in this setup.\n\nThe option that says: Set up a new CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --no-include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies is incorrect because the --is-multi-region-trail is not enough as you also need to add the --include-global-service-events parameter and not --no-include-global-service-events. Plus, you cannot enable the Global Service Events using the CloudTrail console but by using AWS CLI.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-global-service-events\n\nhttp://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html\n\nhttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-create-and-update-a-trail-by-using-the-aws-cli.html\n\n\n\n\nCheck out this AWS CloudTrail Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-cloudtrail/',
    },
    {
      questionNo: 55,
      questionText:
        'You have a web application deployed in AWS which is currently running in the eu-central-1 region. You have an Auto Scaling group of On-Demand EC2 instances which are using pre-built AMIs. Your manager instructed you to implement disaster recovery for your system so in the event that the application goes down in the eu-central-1 region, a new instance can be started in the us-west-2 region. \n\nAs part of your disaster recovery plan, which of the following should you take into consideration?',
      options: [
        {
          isCorrect: false,
          text:
            '​\nNone. AMIs can be used in any region hence, there is no problem using it in the us-west-2 region.',
        },
        {
          isCorrect: false,
          text: '​\nShare the AMI to the us-west-2 region.',
        },
        {
          isCorrect: false,
          text:
            '​\nIn the AMI dashboard, add the us-west-2 region to the Network Access Control List which contains the regions that are allowed to use the AMI.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCopy the AMI from the eu-central-1 region to the us-west-2 region. Afterwards, create a new Auto Scaling group in the us-west-2 region to use this new AMI ID.\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nIn this scenario, the EC2 instances you are currently using depends on a pre-built AMI. This AMI is not accessible to another region hence, you have to copy it to the us-west-2 region to properly establish your disaster recovery instance.\n\nYou can copy an Amazon Machine Image (AMI) within or across an AWS region using the AWS Management Console, the AWS command line tools or SDKs, or the Amazon EC2 API, all of which support the CopyImage action. You can copy both Amazon EBS-backed AMIs and instance store-backed AMIs. You can copy encrypted AMIs and AMIs with encrypted snapshots.\n\nThe options that say: In the AMI dashboard, add the us-west-2 region to the Network Access Control List which contains the regions that are allowed to use the AMI and Share the AMI to the us-west-2 region are incorrect because the AMI does not have a Network Access Control nor a Share functionality.\n\nThe option that says: None. AMIs can be used in any region hence, there is no problem using it in the us-west-2 region is incorrect as you can use a unique or pre-built AMI to a specific region only.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html\n\n\n\n\nHere is a quick tutorial on how to create an AMI from EBS-backed EC2 instance:\n\nhttps://youtu.be/vSKWBBrEbNQ',
    },
    {
      questionNo: 56,
      questionText:
        'You are designing a multi-tier web application architecture that consists of a fleet of EC2 instances and an Oracle relational database server. It is required that the database is highly available and that you have full control over its underlying operating system.\n\nWhich AWS service will you use for your database tier?',
      options: [
        {
          isCorrect: true,
          text:
            '​\n\nAmazon EC2 instances with data replication between two different Availability Zones\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\nAmazon EC2 instances with data replication in one Availability Zone',
        },
        {
          isCorrect: false,
          text: '​\nAmazon RDS',
        },
        {
          isCorrect: false,
          text: '​\nAmazon RDS with Multi-AZ deployments',
        },
      ],
      explain:
        'Explanation\n\nTo achieve this requirement, you can deploy your Oracle database to Amazon EC2 instances with data replication between two different Availability Zones. Hence, this option is the correct answer. The deployment of this architecture can easily be achieved by using CloudFormation and Quick Start. Please refer to the reference link for information.\n\nThe Quick Start deploys the Oracle primary database (using the preconfigured, general-purpose starter database from Oracle) on an Amazon EC2 instance in the first Availability Zone. It then sets up a second EC2 instance in a second Availability Zone, copies the primary database to the second instance by using the DUPLICATE command, and configures Oracle Data Guard.\n\nAmazon RDS and Amazon RDS with Multi-AZ deployments are both incorrect because the scenario requires you to have access to the underlying operating system of the database server. Remember that Amazon RDS is a managed database service, which means that Amazon is the one that manages the underlying operating system of the database instance and not you.\n\nThe option that says: Amazon EC2 instances with data replication in one Availability Zone is incorrect since deploying to just one Availability Zone (AZ) will not make the database tier highly available. If that AZ went down, your database will be unavailable.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/quickstart/\n\nhttps://docs.aws.amazon.com/quickstart/latest/oracle-database/architecture.html\n\nhttp://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.ReplicationInstance.html\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/',
    },
    {
      questionNo: 57,
      questionText:
        'You are working as a Solutions Architect in a new startup that provides storage for high-quality photos which are infrequently accessed by the users. To make the architecture cost-effective, you designed the cloud service to use an S3 One Zone-Infrequent Access (S3 One Zone-IA) storage type for free users and an S3 Standard-Infrequent Access (S3 Standard-IA) storage type for premium users. When your manager found out about this, he asked you about the differences between using S3 One Zone-IA and S3 Standard-IA.\n\nWhat will you say to your manager? (Select TWO.)',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nStoring data in S3 One Zone-IA costs more than storing it in S3 Standard-IA but provides more durability.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nStoring data in S3 One Zone-IA costs less than storing it in S3 Standard-IA.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUnlike other Amazon object storage classes, which store data in a minimum of three Availability Zones (AZs), S3 One Zone-IA stores data in two AZs only. Hence the name, One Zone-IA since the data replication is skipped in one Availability Zone.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nS3 One Zone-IA offers lower durability and low throughput compared with Amazon S3 Standard and S3 Standard-IA which is why it has a low per GB storage price and per GB retrieval fee.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nUnlike other Amazon object storage classes, which store data in a minimum of three Availability Zones (AZs), S3 One Zone-IA stores data in a single AZ.\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nAmazon S3 One Zone-Infrequent Access (S3 One Zone-IA) is an Amazon S3 storage class for data that is accessed less frequently but requires rapid access when needed. Unlike other Amazon object storage classes, which store data in a minimum of three Availability Zones (AZs), S3 One Zone-IA stores data in a single AZ. Because of this, storing data in S3 One Zone-IA costs 20% less than storing it in S3 Standard-IA. S3 One Zone-IA is ideal for customers who want a lower cost option for infrequently accessed data but do not require the availability and resilience of S3 Standard or S3 Standard-IA storage. It’s a good choice, for example, for storing secondary backup copies of on-premises data or easily re-creatable data, or for storage used as an S3 Cross-Region Replication target from another AWS Region.\n\nS3 One Zone-IA offers the same high durability, high throughput, and low latency of Amazon S3 Standard and S3 Standard-IA, with a low per GB storage price and per GB retrieval fee. The S3 One Zone-IA storage class is set at the object level and can exist in the same bucket as S3 Standard and S3 Standard-IA, allowing you to use S3 Lifecycle Policies to automatically transition objects between storage classes without any application changes.\n\nKey Features:\n\nSame low latency and high throughput performance of S3 Standard and S3 Standard-IA\n\nDesigned for durability of 99.999999999% of objects in a single Availability Zone, but data will be lost in the event of Availability Zone destruction\n\nDesigned for 99.5% availability over a given year\n\nBacked with the Amazon S3 Service Level Agreement for availability\n\nSupports SSL for data in transit and encryption of data at rest\n\nLifecycle management for automatic migration of objects\n\nRemember that since the S3 One Zone-IA stores data in a single AWS Availability Zone, data stored in this storage class will be lost in the event of Availability Zone destruction.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/s3/storage-classes/#Amazon_S3_One_Zone-Infrequent_Access\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/',
    },
    {
      questionNo: 58,
      questionText:
        'A pharmaceutical company has resources hosted on both their on-premises network and in AWS cloud. They want all of their Software Architects to access resources on both environments using their on-premises credentials, which is stored in Active Directory.\n\nIn this scenario, which of the following can be used to fulfill this requirement?',
      options: [
        {
          isCorrect: false,
          text: '​\nUse IAM users',
        },
        {
          isCorrect: false,
          text: '​\n\nUse Amazon VPC',
        },
        {
          isCorrect: false,
          text:
            '​\n\nSet up SAML 2.0-Based Federation by using a Web Identity Federation.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nSet up SAML 2.0-Based Federation by using a Microsoft Active Directory Federation Service (AD FS).\n\n(Correct)',
        },
      ],
      explain:
        "Explanation\n\nSince the company is using Microsoft Active Directory which implements Security Assertion Markup Language (SAML), you can set up a SAML-Based Federation for API Access to your AWS cloud. In this way, you can easily connect to AWS using the login credentials of your on-premises network.\n\n\n\n\n\n\n\nAWS supports identity federation with SAML 2.0, an open standard that many identity providers (IdPs) use. This feature enables federated single sign-on (SSO), so users can log into the AWS Management Console or call the AWS APIs without you having to create an IAM user for everyone in your organization. By using SAML, you can simplify the process of configuring federation with AWS, because you can use the IdP's service instead of writing custom identity proxy code.\n\nBefore you can use SAML 2.0-based federation as described in the preceding scenario and diagram, you must configure your organization's IdP and your AWS account to trust each other. The general process for configuring this trust is described in the following steps. Inside your organization, you must have an IdP that supports SAML 2.0, like Microsoft Active Directory Federation Service (AD FS, part of Windows Server), Shibboleth, or another compatible SAML 2.0 provider.\n\nHence, the correct answer is: Set up SAML 2.0-Based Federation by using a Microsoft Active Directory Federation Service (AD FS).\n\nSetting up SAML 2.0-Based Federation by using a Web Identity Federation is incorrect because this is primarily used to let users sign in via a well-known external identity provider (IdP), such as Login with Amazon, Facebook, Google. It does not utilize Active Directory.\n\nUsing IAM users is incorrect because the situation requires you to use the existing credentials stored in their Active Directory, and not user accounts that will be generated by IAM.\n\nUsing Amazon VPC is incorrect because this only lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. This has nothing to do with user authentication or Active Directory.\n\n\n\n\nReferences:\n\nhttp://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html\n\n\n\n\nCheck out this AWS IAM Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-identity-and-access-management-iam/",
    },
    {
      questionNo: 59,
      questionText:
        'A content management system (CMS) is hosted on a fleet of auto-scaled, On-Demand EC2 instances which use Amazon Aurora as its database. Currently, the system stores the file documents that the users uploaded in one of the attached EBS Volumes. Your manager noticed that the system performance is quite slow and he has instructed you to improve the architecture of the system.\n\nIn this scenario, what will you do to implement a scalable, high throughput POSIX-compliant file system?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nUse ElastiCache',
        },
        {
          isCorrect: false,
          text:
            '​\n\nUpgrade your existing EBS volumes to Provisioned IOPS SSD Volumes',
        },
        {
          isCorrect: false,
          text:
            '​\n\nCreate an S3 bucket and use this as the storage for the CMS',
        },
        {
          isCorrect: true,
          text: '​\n\nUse EFS\n\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nAmazon Elastic File System (Amazon EFS) provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. When mounted on Amazon EC2 instances, an Amazon EFS file system provides a standard file system interface and file system access semantics, allowing you to seamlessly integrate Amazon EFS with your existing applications and tools. Multiple Amazon EC2 instances can access an Amazon EFS file system at the same time, allowing Amazon EFS to provide a common data source for workloads and applications running on more than one Amazon EC2 instance.\n\nThis particular scenario tests your understanding of EBS, EFS, and S3. In this scenario, there is a fleet of On-Demand EC2 instances that stores file documents from the users to one of the attached EBS Volumes. The system performance is quite slow because the architecture doesn\'t provide the EC2 instances a parallel shared access to the file documents.\n\nRemember that an EBS Volume can be attached to one EC2 instance at a time, hence, no other EC2 instance can connect to that EBS Provisioned IOPS Volume. Take note as well that the type of storage needed here is a "file storage" which means that S3 is not the best service to use because it is mainly used for "object storage", and S3 does not provide the notion of "folders" too. This is why using EFS is the correct answer.\n\n\n\n\n\n\n\nUpgrading your existing EBS volumes to Provisioned IOPS SSD Volumes is incorrect because the scenario requires you to set up a scalable, high throughput storage system that will allow concurrent access from multiple EC2 instances. This is clearly not possible in EBS, even with Provisioned IOPS SSD Volumes. You have to use EFS instead.\n\nUsing ElastiCache is incorrect because this is an in-memory data store that improves the performance of your applications, which is not what you need since it is not a file storage.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/efs/\n\n\n\n\nCheck out this Amazon EFS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-efs/\n\n\n\n\nCheck out this Amazon S3 vs EBS vs EFS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3-vs-ebs-vs-efs/\n\n\n\n\nHere\'s a short video tutorial on Amazon EFS:\n\nhttps://youtu.be/AvgAozsfCrY',
    },
    {
      questionNo: 60,
      questionText:
        'A Forex trading platform, which frequently processes and stores global financial data every minute, is hosted in your on-premises data center and uses an Oracle database. Due to a recent cooling problem in their data center, the company urgently needs to migrate their infrastructure to AWS to improve the performance of their applications. As the Solutions Architect, you are responsible in ensuring that the database is properly migrated and should remain available in case of database server failure in the future. \n\nWhich of the following is the most suitable solution to meet the requirement?',
      options: [
        {
          isCorrect: false,
          text:
            '​\n\nConvert the database schema using the AWS Schema Conversion Tool and AWS Database Migration Service. Migrate the Oracle database to a non-cluster Amazon Aurora with a single instance.',
        },
        {
          isCorrect: true,
          text:
            '​\n\nCreate an Oracle database in RDS with Multi-AZ deployments.\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nLaunch an Oracle Real Application Clusters (RAC) in RDS.',
        },
        {
          isCorrect: false,
          text:
            '​\n\nLaunch an Oracle database instance in RDS with Recovery Manager (RMAN) enabled.',
        },
      ],
      explain:
        'Explanation\n\nAmazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable.\n\nIn case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.\n\nIn this scenario, the best RDS configuration to use is an Oracle database in RDS with Multi-AZ deployments to ensure high availability even if the primary database instance goes down. Hence, creating an Oracle database in RDS with Multi-AZ deployments is the correct answer.\n\nLaunching an Oracle database instance in RDS with Recovery Manager (RMAN) enabled and launching an Oracle Real Application Clusters (RAC) in RDS are incorrect because Oracle RMAN and RAC are not supported in RDS.\n\nThe option that says: Convert the database schema using the AWS Schema Conversion Tool and AWS Database Migration Service. Migrate the Oracle database to a non-cluster Amazon Aurora with a single instance is incorrect because although this solution is feasible, it takes time to migrate your Oracle database to Aurora, which is not acceptable. Based on this option, the Aurora database is only using a single instance with no Read Replica and is not configured as an Amazon Aurora DB cluster, which could have improved the availability of the database.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/',
    },
    {
      questionNo: 61,
      questionText:
        'A multi-tiered application hosted in your on-premises data center is scheduled to be migrated to AWS. The application has a message broker service which uses industry standard messaging APIs and protocols that must be migrated as well, without rewriting the messaging code in your application. \n\nWhich of the following is the most suitable service that you should use to move your messaging service to AWS?',
      options: [
        {
          isCorrect: false,
          text: '​\n\nAmazon SWF',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon SQS',
        },
        {
          isCorrect: true,
          text: '​\n\nAmazon MQ\n\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon SNS',
        },
      ],
      explain:
        "Explanation\n\nAmazon MQ, Amazon SQS, and Amazon SNS are messaging services that are suitable for anyone from startups to enterprises. If you're using messaging with existing applications and want to move your messaging service to the cloud quickly and easily, it is recommended that you consider Amazon MQ. It supports industry-standard APIs and protocols so you can switch from any standards-based message broker to Amazon MQ without rewriting the messaging code in your applications.\n\nHence, Amazon MQ is the correct answer.\n\n\n\n\n\n\n\nIf you are building brand new applications in the cloud, then it is highly recommended that you consider Amazon SQS and Amazon SNS. Amazon SQS and SNS are lightweight, fully managed message queue and topic services that scale almost infinitely and provide simple, easy-to-use APIs. You can use Amazon SQS and SNS to decouple and scale microservices, distributed systems, and serverless applications, and improve reliability.\n\nAmazon SQS is incorrect because although this is a fully managed message queuing service, it does not support an extensive list of industry-standard messaging APIs and protocol, unlike Amazon MQ. Moreover, using Amazon SQS requires you to do additional changes in the messaging code of applications to make it compatible.\n\nAmazon SNS is incorrect because SNS is more suitable as a pub/sub messaging service instead of a message broker service.\n\nAmazon SWF is incorrect because this is a fully-managed state tracker and task coordinator service and not a messaging service, unlike Amazon MQ, AmazonSQS and Amazon SNS.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/amazon-mq/faqs/\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html#sqs-difference-from-amazon-mq-sns\n\n\n\n\nCheck out this Amazon MQ Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-mq/",
    },
    {
      questionNo: 62,
      questionText:
        'You are working for a large financial company as an IT consultant. Your role is to help their development team to build a highly available web application using stateless web servers. In this scenario, which AWS services are suitable for storing session state data? (Select TWO.)',
      options: [
        {
          isCorrect: false,
          text: '​\n\nRedshift Spectrum',
        },
        {
          isCorrect: false,
          text: '​\nGlacier',
        },
        {
          isCorrect: false,
          text: '​\n\nRDS',
        },
        {
          isCorrect: true,
          text: '​\nDynamoDB\n(Correct)',
        },
        {
          isCorrect: true,
          text: '​\nElastiCache\n(Correct)',
        },
      ],
      explain:
        'Explanation\n\nDynamoDB and ElastiCache are the correct answers. You can store session state data on both DynamoDB and ElastiCache. These AWS services provide high-performance storage of key-value pairs which can be used to build a highly available web application.\n\n\n\n\n\n\n\nRedshift Spectrum is incorrect since this is a data warehousing solution where you can directly query data from your data warehouse. Redshift is not suitable for storing session state, but more on analytics and OLAP processes.\n\nRDS is incorrect as well since this is a relational database solution of AWS. This relational storage type might not be the best fit for session states, and it might not provide the performance you need compared to DynamoDB for the same cost.\n\nS3 Glacier is incorrect as well since this is a low-cost cloud storage service for data archiving and long-term backup. The archival and retrieval speeds of Glacier is too slow for handling session states.\n\nReferences:\n\nhttps://aws.amazon.com/caching/database-caching/\n\nhttps://aws.amazon.com/caching/session-management/\n\n\n\n\nCheck out this Amazon Elasticache Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elasticache/',
    },
    {
      questionNo: 63,
      questionText:
        'A telecommunications company is planning to give AWS Console access to developers. Company policy mandates the use of identity federation and role-based access control. Currently, the roles are already assigned using groups in the corporate Active Directory.\n\nIn this scenario, what combination of the following services can provide developers access to the AWS console? (Select TWO.)',
      options: [
        {
          isCorrect: false,
          text: '​\n\nLambda',
        },
        {
          isCorrect: false,
          text: '​\nIAM Groups',
        },
        {
          isCorrect: true,
          text: '​\nAWS Directory Service AD Connector\n(Correct)',
        },
        {
          isCorrect: true,
          text: '​\nIAM Roles\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\nAWS Directory Service Simple AD',
        },
      ],
      explain:
        'Explanation\n\nConsidering that the company is using a corporate Active Directory, it is best to use AWS Directory Service AD Connector for easier integration. In addition, since the roles are already assigned using groups in the corporate Active Directory, it would be better to also use IAM Roles. Take note that you can assign an IAM Role to the users or groups from your Active Directory once it is integrated with your VPC via the AWS Directory Service AD Connector.\n\n\n\n\n\n\n\nAWS Directory Service provides multiple ways to use Amazon Cloud Directory and Microsoft Active Directory (AD) with other AWS services. Directories store information about users, groups, and devices, and administrators use them to manage access to information and resources. AWS Directory Service provides multiple directory choices for customers who want to use existing Microsoft AD or Lightweight Directory Access Protocol (LDAP)–aware applications in the cloud. It also offers those same choices to developers who need a directory to manage users, groups, devices, and access.\n\nAWS Directory Service Simple AD is incorrect because this just provides a subset of the features offered by AWS Managed Microsoft AD, including the ability to manage user accounts and group memberships, create and apply group policies, securely connect to Amazon EC2 instances, and provide Kerberos-based single sign-on (SSO). In this scenario, the more suitable component to use is the AD Connector since it is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory.\n\nIAM Groups is incorrect because this is just a collection of IAM users. Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users. In this scenario, the more suitable one to use is IAM Roles in order for permissions to create AWS Directory Service resources.\n\nLambda is incorrect because this is primarily used for serverless computing.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/blogs/security/how-to-connect-your-on-premises-active-directory-to-aws-using-ad-connector/\n\n\n\n\nCheck out these AWS IAM and Directory Service Cheat Sheets:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-identity-and-access-management-iam/\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-directory-service/\n\n\n\n\nHere is a video tutorial on AWS Directory Service:\n\nhttps://youtu.be/4XeqotTYBtY',
    },
    {
      questionNo: 64,
      questionText:
        'A traffic monitoring and reporting application uses Kinesis to accept real-time data. In order to process and store the data, they used Amazon Kinesis Data Firehose to load the streaming data to various AWS resources.   \n\nWhich of the following services can you load streaming data into?',
      options: [
        {
          isCorrect: true,
          text: '​\nAmazon Elasticsearch Service\n(Correct)',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon S3 Select',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon Redshift Spectrum',
        },
        {
          isCorrect: false,
          text: '​\n\nAmazon Athena',
        },
      ],
      explain:
        'Explanation\n\nAmazon Kinesis Data Firehose is the easiest way to load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today.\n\nIt is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.\n\n\n\n\n\n\n\n\n\n\nAmazon S3 Select and Amazon Redshift Spectrum are incorrect because Amazon S3 Select is just a feature of Amazon S3. Likewise, Redshift Spectrum is also just a feature of Amazon Redshift. Although Amazon Kinesis Data Firehose can load streaming data to both Amazon S3 and Amazon Redshift, it does not directly load the data to S3 Select and Redshift Spectrum.\n\nS3 Select is an Amazon S3 feature that makes it easy to retrieve specific data from the contents of an object using simple SQL expressions without having to retrieve the entire object. Amazon Redshift Spectrum is a feature of Amazon Redshift that enables you to run queries against exabytes of unstructured data in Amazon S3 with no loading or ETL required.\n\nAmazon Athena is incorrect because Amazon Kinesis Data Firehose cannot load streaming data to Athena.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/kinesis/data-firehose/\n\n\n\n\nCheck out these Amazon Kinesis and Elasticsearch Cheat Sheets:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-kinesis/\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elasticsearch-amazon-es/',
    },
];
const data2 = [
  {
      "questionNo": 0,
      "questionText": "You are instructed by your manager to set up a bastion host in your Amazon VPC and it should only be accessed from the corporate data center via SSH. What is the best way for you to achieve this?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nCreate a small EC2 instance with a security group which only allows access on port 22 using your own pre-configured password."
          },
          {
              "isCorrect": false,
              "text": "​\n\nCreate a large EC2 instance with a security group which only allows access on port 22 via the IP address of the corporate data center. Use a private key (.pem) file to connect to the bastion host.\n\n(Incorrect)"
          },
          {
              "isCorrect": true,
              "text": "​\n\nCreate a small EC2 instance with a security group which only allows access on port 22 via the IP address of the corporate data center. Use a private key (.pem) file to connect to the bastion host.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nCreate a large EC2 instance with a security group which only allows access on port 22 using your own pre-configured password."
          }
      ],
      "explain": "Explanation\n\nThe best way to implement a bastion host is to create a small EC2 instance which should only have a security group from a particular IP address for maximum security. This will block any SSH Brute Force attacks on your bastion host. It is also recommended to use a small instance rather than a large one because this host will only act as a jump server to connect to other instances in your VPC and nothing else.\n\n\n\n\n\n\n\nTherefore, there is no point of allocating a large instance simply because it doesn't need that much computing power to process SSH (port 22) or RDP (port 3389) connections. It is possible to use SSH with an ordinary user ID and a pre-configured password as credentials but it is more secure to use public key pairs for SSH authentication for better security.\n\nHence, the right answer for this scenario is the option that says: Create a small EC2 instance with a security group which only allows access on port 22 via the IP address of the corporate data center. Use a private key (.pem) file to connect to the bastion host.\n\nCreating a large EC2 instance with a security group which only allows access on port 22 using your own pre-configured password and creating a small EC2 instance with a security group which only allows access on port 22 using your own pre-configured password are incorrect because even though you have your own pre-configured password, the SSH connection can still be accessed by anyone over the Internet, which poses as a security vulnerability.\n\nThe option that says: Create a large EC2 instance with a security group which only allows access on port 22 via the IP address of the corporate data center. Use a private key (.pem) file to connect to the bastion host is incorrect because you don't need a large instance for a bastion host as it does not require much CPU resources.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/quickstart/latest/linux-bastion/architecture.html\n\nhttps://aws.amazon.com/blogs/security/how-to-record-ssh-sessions-established-through-a-bastion-host/\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-vpc/"
  },
  {
      "questionNo": 1,
      "questionText": "One member of your DevOps team consulted you about a connectivity problem in one of your Amazon EC2 instances. The application architecture is initially set up with four EC2 instances, each with an EIP address that all belong to a public non-default subnet. You launched another instance to handle the increasing workload of your application. The EC2 instances also belong to the same security group. Everything works well as expected except for one of the EC2 instances which is not able to send nor receive traffic over the Internet.\n\nWhich of the following is the MOST likely reason for this issue?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nThe EC2 instance is running in an Availability Zone that is not connected to an Internet gateway."
          },
          {
              "isCorrect": true,
              "text": "​\nThe EC2 instance does not have a public IP address associated with it.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nThe route table is not properly configured to allow traffic to and from the Internet through the Internet gateway."
          },
          {
              "isCorrect": false,
              "text": "​\nThe EC2 instance does not have a private IP address associated with it."
          }
      ],
      "explain": "Explanation\n\nIP addresses enable resources in your VPC to communicate with each other, and with resources over the Internet. Amazon EC2 and Amazon VPC support the IPv4 and IPv6 addressing protocols.\n\nBy default, Amazon EC2 and Amazon VPC use the IPv4 addressing protocol. When you create a VPC, you must assign it an IPv4 CIDR block (a range of private IPv4 addresses). Private IPv4 addresses are not reachable over the Internet. To connect to your instance over the Internet, or to enable communication between your instances and other AWS services that have public endpoints, you can assign a globally-unique public IPv4 address to your instance.\n\nYou can optionally associate an IPv6 CIDR block with your VPC and subnets, and assign IPv6 addresses from that block to the resources in your VPC. IPv6 addresses are public and reachable over the Internet.\n\n\n\n\n\n\n\nAll subnets have a modifiable attribute that determines whether a network interface created in that subnet is assigned a public IPv4 address and, if applicable, an IPv6 address. This includes the primary network interface (eth0) that's created for an instance when you launch an instance in that subnet. Regardless of the subnet attribute, you can still override this setting for a specific instance during launch.\n\nBy default, nondefault subnets have the IPv4 public addressing attribute set to false, and default subnets have this attribute set to true. An exception is a nondefault subnet created by the Amazon EC2 launch instance wizard — the wizard sets the attribute to true. You can modify this attribute using the Amazon VPC console.\n\nIn this scenario, there are 5 EC2 instances that belong to the same security group that should be able to connect to the Internet. The main route table is properly configured but there is a problem connecting to one instance. Since the other four instances are working fine, we can assume that the security group and the route table are correctly configured. One possible reason for this issue is that the problematic instance does not have a public or an EIP address.\n\nTake note as well that the four EC2 instances all belong to a public non-default subnet. Which means that a new EC2 instance will not have a public IP address by default since the since IPv4 public addressing attribute is initially set to false.\n\nHence, the correct answer is the option that says: The EC2 instance does not have a public IP address associated with it.\n\nThe option that says: The route table is not properly configured to allow traffic to and from the Internet through the Internet gateway is incorrect because the other three instances, which are associated with the same route table and security group, do not have any issues.\n\nThe option that says: The EC2 instance is running in an Availability Zone that is not connected to an Internet gateway is incorrect because there is no relationship between the Availability Zone and the Internet Gateway (IGW) that may have caused the issue.\n\n\n\n\nReferences:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario1.html\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#vpc-ip-addressing-subnet\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/"
  },
  {
      "questionNo": 2,
      "questionText": "In Elastic Load Balancing, there are various security features that you can use such as Server Order Preference, Predefined Security Policy, Perfect Forward Secrecy and many others. Perfect Forward Secrecy is a feature that provides additional safeguards against the eavesdropping of encrypted data through the use of a unique random session key. This prevents the decoding of captured data, even if the secret long-term key is compromised.   \n\nPerfect Forward Secrecy is used to offer SSL/TLS cipher suites for which two AWS services?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nTrusted Advisor and GovCloud"
          },
          {
              "isCorrect": true,
              "text": "​\n\nCloudFront and Elastic Load Balancing\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nEC2 and S3"
          },
          {
              "isCorrect": false,
              "text": "​\nCloudTrail and CloudWatch"
          }
      ],
      "explain": "Explanation\n\nPerfect Forward Secrecy is a feature that provides additional safeguards against the eavesdropping of encrypted data, through the use of a unique random session key. This prevents the decoding of captured data, even if the secret long-term key is compromised.\n\nCloudFront and Elastic Load Balancing are the two AWS services that support Perfect Forward Secrecy. Hence, the correct answer is: CloudFront and Elastic Load Balancing.\n\nEC2 and S3, CloudTrail and CloudWatch, and Trusted Advisor and GovCloud are incorrect since these services do not use Perfect Forward Secrecy. SSL/TLS is commonly used when you have sensitive data travelling through the public network.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/about-aws/whats-new/2014/02/19/elastic-load-balancing-perfect-forward-secrecy-and-more-new-security-features/\n\nhttps://d1.awsstatic.com/whitepapers/Security/Secure_content_delivery_with_CloudFront_whitepaper.pdf\n\n\n\n\nCheck out this AWS Elastic Load Balancing (ELB) Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-elastic-load-balancing-elb/"
  },
  {
      "questionNo": 3,
      "questionText": "You are a Solutions Architect working for a large insurance company that deployed their production environment on a custom Virtual Private Cloud in AWS with a default configuration. The VPC consists of two private subnets and one public subnet. Inside the public subnet is a group of EC2 instances which are created by an Auto Scaling group and all of the instances are in the same Security Group. Your development team has created a new application which will be accessed by mobile devices via a custom port. This application has been deployed to the production environment and you need to open this port globally to the Internet.\n\nWhich of the following is the correct procedure to meet this requirement?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nOpen the custom port on the Network Access Control List of your VPC. Your EC2 instances will be able to use this port after a reboot."
          },
          {
              "isCorrect": false,
              "text": "​\nOpen the custom port on the Security Group. Your EC2 instances will be able to use this port after 60 minutes."
          },
          {
              "isCorrect": false,
              "text": "​\nOpen the custom port on the Network Access Control List of your VPC. Your EC2 instances will be able to use this port immediately."
          },
          {
              "isCorrect": true,
              "text": "​\nOpen the custom port on the Security Group. Your EC2 instances will be able to use this port immediately.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nTo allow the custom port, you have to change the Inbound Rules in your Security Group to allow traffic coming from the mobile devices. Security Groups usually control the list of ports that are allowed to be used by your EC2 instances and the NACLs control which network or list of IP addresses can connect to your whole VPC.\n\n\n\n\n\n\n\nWhen you create a security group, it has no inbound rules. Therefore, no inbound traffic originating from another host to your instance is allowed until you add inbound rules to the security group. By default, a security group includes an outbound rule that allows all outbound traffic. You can remove the rule and add outbound rules that allow specific outbound traffic only. If your security group has no outbound rules, no outbound traffic originating from your instance is allowed.\n\nThe option that says: Open the custom port on the Security Group. Your EC2 instances will be able to use this port after 60 minutes and Open the custom port on the Network Access Control List of your VPC. Your EC2 instances will be able to use this port after a reboot are both incorrect because any changes to the Security Groups or Network Access Control Lists are applied immediately and not after 60 minutes or after the instance reboot.\n\nThe option that says: Open the custom port on the Network Access Control List of your VPC. Your EC2 instances will be able to use this port immediately is incorrect because the scenario says that VPC is using a default configuration. Since by default, Network ACL allows all inbound and outbound IPv4 traffic, then there is no point of explicitly allowing the port in the Network ACL. Security Groups, on the other hand, does not allow incoming traffic by default, unlike Network ACL.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/"
  },
  {
      "questionNo": 4,
      "questionText": "The operations team of your company asked you for a way to monitor the health of your production EC2 instances in AWS. You told them to use the CloudWatch service.\n\nWhich of the following metrics is not available by default in CloudWatch?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nNetwork In and Out"
          },
          {
              "isCorrect": false,
              "text": "​\nDisk Read operations"
          },
          {
              "isCorrect": true,
              "text": "​\nMemory Usage\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nCPU Usage"
          }
      ],
      "explain": "Explanation\n\nMemory Usage is a metric not available by default in CloudWatch. You need to add a custom metric for it to work.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/"
  },
  {
      "questionNo": 5,
      "questionText": "You developed a web application and deployed it on a fleet of EC2 instances, which is using Amazon SQS. The requests are saved as messages in the SQS queue which is configured with the maximum message retention period.  However, after thirteen days of operation, the web application suddenly crashed and there are 10,000 unprocessed messages that are still waiting in the queue. Since you developed the application, you can easily resolve the issue but you need to send a communication to the users on the issue. \n\nWhat information will you provide and what will happen to the unprocessed messages?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nTell the users that unfortunately, they have to resubmit all of the requests since the queue would not be able to process the 10,000 messages together."
          },
          {
              "isCorrect": false,
              "text": "​\nTell the users that the application will be operational shortly however, requests sent over three days ago will need to be resubmitted."
          },
          {
              "isCorrect": true,
              "text": "​\nTell the users that the application will be operational shortly and all received requests will be processed after the web application is restarted.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nTell the users that unfortunately, they have to resubmit all the requests again."
          }
      ],
      "explain": "Explanation\n\nIn this scenario, it is stated that the SQS queue is configured with the maximum message retention period. The maximum message retention in SQS is 14 days that is why the option that says: Tell the users that the application will be operational shortly and all received requests will be processed after the web application is restarted is the correct answer i.e. there will be no missing messages.\n\nThe options that say: Tell the users that unfortunately, they have to resubmit all the requests again and Tell the users that the application will be operational shortly, however, requests sent over three days ago will need to be resubmitted are incorrect as there are no missing messages in the queue thus, there is no need to resubmit any previous requests.\n\nThe option that says: Tell the users that unfortunately, they have to resubmit all of the requests since the queue would not be able to process the 10,000 messages together is incorrect as the queue can contain an unlimited number of messages, not just 10,000 messages.\n\nIn Amazon SQS, you can configure the message retention period to a value from 1 minute to 14 days. The default is 4 days. Once the message retention limit is reached, your messages are automatically deleted.\n\nA single Amazon SQS message queue can contain an unlimited number of messages. However, there is a 120,000 limit for the number of inflight messages for a standard queue and 20,000 for a FIFO queue. Messages are inflight after they have been received from the queue by a consuming component, but have not yet been deleted from the queue.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/sqs/\n\n\n\n\nCheck out this Amazon SQS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-sqs/"
  },
  {
      "questionNo": 6,
      "questionText": "You are an AWS Network Engineer working for a utility provider where you are managing a monolithic application with an EC2 instance using a Windows AMI. The legacy application must maintain the same private IP address and MAC address in order for it to work. You want to implement a cost-effective and highly available architecture for your application by launching a standby EC2 instance that is an exact replica of the Windows server. If the primary instance terminates, you can attach the ENI to the standby secondary instance, which allows the traffic flow to resume within a few seconds.\n\nWhen it comes to the ENI attachment to an EC2 instance, what does 'warm attach' refer to?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nAttaching an ENI to an instance when it is stopped.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nAttaching an ENI to an instance during the launch process."
          },
          {
              "isCorrect": false,
              "text": "​\nAttaching an ENI to an instance when it is running."
          },
          {
              "isCorrect": false,
              "text": "​\nAttaching an ENI to an instance when it is idle."
          }
      ],
      "explain": "Explanation\n\nYou can create a network interface, attach it to an instance, detach it from an instance, and attach it to another instance. The attributes of a network interface follow it as it's attached or detached from an instance and reattached to another instance. When you move a network interface from one instance to another, network traffic is redirected to the new instance.\n\nIf one of your instances serving a particular function fails, its network interface can be attached to a replacement or hot standby instance pre-configured for the same role in order to rapidly recover the service. For example, you can use a network interface as your primary or secondary network interface to a critical service such as a database instance or a NAT instance.\n\nIf the instance fails, you (or more likely, the code running on your behalf) can attach the network interface to a hot standby instance. Because the interface maintains its private IP addresses, Elastic IP addresses, and MAC address, network traffic begins flowing to the standby instance as soon as you attach the network interface to the replacement instance. Users experience a brief loss of connectivity between the time the instance fails and the time that the network interface is attached to the standby instance, but no changes to the VPC route table or your DNS server are required.\n\nAn elastic network interface (ENI) is a logical networking component in a VPC that represents a virtual network card. You can attach a network interface to an EC2 instance in the following ways:\n\nWhen it's running (hot attach)\n\nWhen it's stopped (warm attach)\n\nWhen the instance is being launched (cold attach).\n\nTherefore, attaching an ENI to an instance when it is stopped is the correct answer.\n\nAttaching an ENI to an instance during the launch process is incorrect because this describes a \"cold attach\" scenario.\n\nAttaching an ENI to an instance when it is running is incorrect because this describes a \"hot attach\" scenario.\n\nAttaching an ENI to an instance when it is idle is incorrect because there is no specific name for attaching an ENI to an idle EC2 instance.\n\n\n\n\nReferences:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#attach_eni_launch\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/vpc-detach-or-delete-eni/\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/"
  },
  {
      "questionNo": 7,
      "questionText": "You are building a cloud infrastructure where you have EC2 instances that require access to various AWS services such as S3 and Redshift. You will also need to provision access to system administrators so they can deploy and test their changes.\n\nWhich configuration should be used to ensure that the access to your resources are secured and not compromised? (Select TWO.)",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nStore the AWS Access Keys in ACM."
          },
          {
              "isCorrect": false,
              "text": "​\nStore the AWS Access Keys in the EC2 instance."
          },
          {
              "isCorrect": true,
              "text": "​\nEnable Multi-Factor Authentication.\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\nAssign an IAM role to the Amazon EC2 instance.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nAssign an IAM user for each Amazon EC2 Instance."
          }
      ],
      "explain": "Explanation\n\nIn this scenario, the correct answers are:\n\n- Enable Multi-Factor Authentication\n\n- Assign an IAM role to the Amazon EC2 instance\n\n\n\n\nAlways remember that you should associate IAM roles to EC2 instances and not an IAM user, for the purpose of accessing other AWS services. IAM roles are designed so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use. Instead of creating and distributing your AWS credentials, you can delegate permission to make API requests using IAM roles.\n\n\n\n\n\n\n\nAWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of your user name and password. With MFA enabled, when a user signs in to an AWS website, they will be prompted for their user name and password (the first factor—what they know), as well as for an authentication code from their AWS MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for your AWS account settings and resources. You can enable MFA for your AWS account and for individual IAM users you have created under your account. MFA can also be used to control access to AWS service APIs.\n\nStoring the AWS Access Keys in the EC2 instance is incorrect because this is not recommended by AWS, as it can be compromised. Instead of storing access keys on an EC2 instance for use by applications that run on the instance and make AWS API requests, you can use an IAM role to provide temporary access keys for these applications.\n\nAssigning an IAM user for each Amazon EC2 Instance is incorrect because there is no need to create an IAM user for this scenario since IAM roles already provide greater flexibility and easier management.\n\nStoring the AWS Access Keys in ACM is incorrect because ACM is just a service that lets you easily provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services and your internal connected resources. It is not used as a secure storage for your access keys.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/iam/details/mfa/\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html\n\n\n\n\nCheck out this AWS Identity & Access Management (IAM) Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-identity-and-access-management-iam/"
  },
  {
      "questionNo": 8,
      "questionText": "A music publishing company is building a multitier web application that requires a key-value store which will save the document models. Each model is composed of band ID, album ID, song ID, composer ID, lyrics, and other data. The web tier will be hosted in an Amazon ECS cluster with AWS Fargate launch type.\n\nWhich of the following is the MOST suitable setup for the database-tier?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nLaunch a DynamoDB table.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Amazon WorkDocs to store the document models."
          },
          {
              "isCorrect": false,
              "text": "​\n\nLaunch an Amazon RDS database with Read Replicas."
          },
          {
              "isCorrect": false,
              "text": "​\n\nLaunch an Amazon Aurora Serverless database."
          }
      ],
      "explain": "Explanation\n\nAmazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.\n\n\n\n\n\n\n\nHence, the correct answer is: Launch a DynamoDB table.\n\nThe option that says: Launch an Amazon RDS database with Read Replicas is incorrect because this is a relational database. This is not suitable to be used as a key-value store. A better option is to use DynamoDB as it supports both document and key-value store models.\n\nThe option that says: Use Amazon WorkDocs to store the document models is incorrect because Amazon WorkDocs simply enables you to share content, provide rich feedback, and collaboratively edit documents. It is not a key-value store like DynamoDB.\n\nThe option that says: Launch an Amazon Aurora Serverless database is incorrect because this type of database is not suitable to be used as a key-value store. Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora where the database will automatically start-up, shut down, and scale capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database instances. It's a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads and not as a key-value store.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/dynamodb/\n\nhttps://aws.amazon.com/nosql/key-value/\n\n\n\n\nCheck out this Amazon DynamoDB Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-dynamodb/"
  },
  {
      "questionNo": 9,
      "questionText": "Your client is an insurance company that utilizes SAP HANA for their day-to-day ERP operations. Since you can’t migrate this database due to customer preferences, you need to integrate it with your current AWS workload in your VPC in which you are required to establish a site-to-site VPN connection.   \n\nWhat needs to be configured outside of the VPC for you to have a successful site-to-site VPN connection?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nA dedicated NAT instance in a public subnet"
          },
          {
              "isCorrect": false,
              "text": "​\nAn EIP to the Virtual Private Gateway"
          },
          {
              "isCorrect": true,
              "text": "​\n\nAn Internet-routable IP address (static) of the customer gateway's external interface for the on-premises network\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nThe main route table in your VPC to route traffic through a NAT instance"
          }
      ],
      "explain": "Explanation\n\nBy default, instances that you launch into a virtual private cloud (VPC) can't communicate with your own network. You can enable access to your network from your VPC by attaching a virtual private gateway to the VPC, creating a custom route table, updating your security group rules, and creating an AWS managed VPN connection.\n\nAlthough the term VPN connection is a general term, in the Amazon VPC documentation, a VPN connection refers to the connection between your VPC and your own network. AWS supports Internet Protocol security (IPsec) VPN connections.\n\nA customer gateway is a physical device or software application on your side of the VPN connection.\n\nTo create a VPN connection, you must create a customer gateway resource in AWS, which provides information to AWS about your customer gateway device. Next, you have to set up an Internet-routable IP address (static) of the customer gateway's external interface.\n\nThe following diagram illustrates single VPN connections. The VPC has an attached virtual private gateway, and your remote network includes a customer gateway, which you must configure to enable the VPN connection. You set up the routing so that any traffic from the VPC bound for your network is routed to the virtual private gateway.\n\n\n\n\n\n\n\nA dedicated NAT instance in a public subnet and the main route table in your VPC to route traffic through a NAT instance are incorrect since you don't need a NAT instance for you to be able to create a VPN connection.\n\nAn EIP to the Virtual Private Gateway is incorrect since you do not attach an EIP to a VPG.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/SetUpVPNConnections.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/\n\n\n\n\nHow to create a VPN with Amazon VPC:\n\nhttps://www.youtube.com/watch?v=pf0J6oPCIbE"
  },
  {
      "questionNo": 10,
      "questionText": "You run a website which accepts high-quality photos and turns them into a downloadable video montage. The website offers a free account and a premium account that guarantees faster processing. All requests by both free and premium members go through a single SQS queue and then processed by a group of EC2 instances which generate the videos. You need to ensure that the premium users who paid for the service have higher priority than your free members.   \n\nHow do you re-design your architecture to address this requirement?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nUse Amazon Kinesis to process the photos and generate the video montage in real time."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Amazon S3 to store and process the photos and then generate the video montage afterwards."
          },
          {
              "isCorrect": false,
              "text": "​\nFor the requests made by premium members, set a higher priority in the SQS queue so it will be processed first compared to the requests made by free members."
          },
          {
              "isCorrect": true,
              "text": "​\nCreate an SQS queue for free members and another one for premium members. Configure your EC2 instances to consume messages from the premium queue first and if it is empty, poll from the free members' SQS queue.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nIn this scenario, it is best to create 2 separate SQS queues for each type of members. The SQS queues for the premium members can be polled first by the EC2 Instances and once completed, the messages from the free members can be processed next.\n\nThe option that says: For the requests made by premium members, set a higher priority in the SQS queue so it will be processed first compared to the requests made by free members is incorrect as you cannot set a priority to individual items in the SQS queue.\n\nUsing Amazon Kinesis to process the photos and generate the video montage in real time is incorrect as Amazon Kinesis is used to process streaming data and it is not applicable in this scenario.\n\nUsing Amazon S3 to store and process the photos and then generating the video montage afterwards is incorrect as Amazon S3 is used for durable storage and not for processing data.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html\n\n\n\n\nCheck out this Amazon SQS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-sqs/"
  },
  {
      "questionNo": 11,
      "questionText": "A company is planning to launch an application which requires a data warehouse that will be used for their infrequently accessed data. You need to use an EBS Volume that can handle large, sequential I/O operations.\n\nWhich of the following is the most cost-effective storage type that you should use to meet the requirement?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nThroughput Optimized HDD (st1)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nEBS General Purpose SSD (gp2)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nProvisioned IOPS SSD (io1)"
          },
          {
              "isCorrect": true,
              "text": "​\n\nCold HDD (sc1)\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nCold HDD volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. With a lower throughput limit than Throughput Optimized HDD, this is a good fit ideal for large, sequential cold-data workloads. If you require infrequent access to your data and are looking to save costs, Cold HDD provides inexpensive block storage. Take note that bootable Cold HDD volumes are not supported.\n\n\n\n\n\n\n\nCold HDD provides the lowest cost HDD volume and is designed for less frequently accessed workloads. Hence, Cold HDD (sc1) is the correct answer.\n\nIn the exam, always consider the difference between SSD and HDD as shown on the table below. This will allow you to easily eliminate specific EBS-types in the options which are not SSD or not HDD, depending on whether the question asks for a storage type which has small, random I/O operations or large, sequential I/O operations.\n\n\n\n\n\n\n\nEBS General Purpose SSD (gp2) is incorrect because a General purpose SSD volume costs more and it is mainly used for a wide variety of workloads. It is recommended to be used as system boot volumes, virtual desktops, low-latency interactive apps, and many more.\n\nProvisioned IOPS SSD (io1) is incorrect because this costs more than Cold HDD and thus, not cost-effective for this scenario. It provides the highest performance SSD volume for mission-critical low-latency or high-throughput workloads, which is not needed in the scenario.\n\nThroughput Optimized HDD (st1) is incorrect because this is primarily used for frequently accessed, throughput-intensive workloads. In this scenario, Cold HDD perfectly fits the requirement as it is used for their infrequently accessed data and provides the lowest cost, unlike Throughput Optimized HDD.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/ebs/details/\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n\n\n\nCheck out this Amazon EBS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-ebs/"
  },
  {
      "questionNo": 12,
      "questionText": "You have a data analytics application that updates a real-time, foreign exchange dashboard and another separate application that archives data to Amazon Redshift. Both applications are configured to consume data from the same stream concurrently and independently by using Amazon Kinesis Data Streams. However, you noticed that there are a lot of occurrences where a shard iterator expires unexpectedly. Upon checking, you found out that the DynamoDB table used by Kinesis does not have enough capacity to store the lease data.   \n\nWhich of the following is the most suitable solution to rectify this issue?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nIncrease the write capacity assigned to the shard table.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Amazon Kinesis Data Analytics to properly support the data analytics application instead of Kinesis Data Stream."
          },
          {
              "isCorrect": false,
              "text": "​\n\nEnable In-Memory Acceleration with DynamoDB Accelerator (DAX)."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUpgrade the storage capacity of the DynamoDB table."
          }
      ],
      "explain": "Explanation\n\nA new shard iterator is returned by every GetRecords request (as NextShardIterator), which you then use in the next GetRecords request (as ShardIterator). Typically, this shard iterator does not expire before you use it. However, you may find that shard iterators expire because you have not called GetRecords for more than 5 minutes, or because you've performed a restart of your consumer application.\n\n\n\n\n\n\n\nIf the shard iterator expires immediately before you can use it, this might indicate that the DynamoDB table used by Kinesis does not have enough capacity to store the lease data. This situation is more likely to happen if you have a large number of shards. To solve this problem, increase the write capacity assigned to the shard table.\n\nHence, increasing the write capacity assigned to the shard table is the correct answer.\n\nUpgrading the storage capacity of the DynamoDB table is incorrect because DynamoDB is a fully managed service which automatically scales its storage, without setting it up manually. The scenario refers to the write capacity of the shard table when it says that the DynamoDB table used by Kinesis does not have enough capacity to store the lease data.\n\nEnabling In-Memory Acceleration with DynamoDB Accelerator (DAX) is incorrect because the DAX feature is primarily used for read performance improvement of your DynamoDB table from milliseconds response time to microseconds. It does not have any relationship with Amazon Kinesis Data Stream in this scenario.\n\nUsing Amazon Kinesis Data Analytics to properly support the data analytics application instead of Kinesis Data Stream is incorrect because although Amazon Kinesis Data Analytics can support a data analytics application, it is still not a suitable solution for this issue. You simply need to increase the write capacity assigned to the shard table in order to rectify the problem which is why switching to Amazon Kinesis Data Analytics is not necessary.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-ddb.html\n\nhttps://docs.aws.amazon.com/streams/latest/dev/troubleshooting-consumers.html\n\n\n\n\nCheck out this Amazon Kinesis Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-kinesis/"
  },
  {
      "questionNo": 13,
      "questionText": "You work for an Intelligence Agency as its Principal Consultant developing a missile tracking application, which is hosted on both development and production AWS accounts. Alice, the Intelligence agency’s Junior Developer, only has access to the development account. She has received security clearance to access the agency’s production account but the access is only temporary and only write access to EC2 and S3 is allowed.\n\nWhich of the following allows you to issue short-lived access tokens that acts as temporary security credentials to allow access to your AWS resources?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nAll of the given options are correct."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse AWS SSO"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse AWS Cognito to issue JSON Web Tokens (JWT)"
          },
          {
              "isCorrect": true,
              "text": "​\n\nUse AWS STS\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAWS Security Token Service (AWS STS) is the service that you can use to create and provide trusted users with temporary security credentials that can control access to your AWS resources. Temporary security credentials work almost identically to the long-term access key credentials that your IAM users can use.\n\nIn this diagram, IAM user Alice in the Dev account (the role-assuming account) needs to access the Prod account (the role-owning account). Here’s how it works:\n\nAlice in the Dev account assumes an IAM role (WriteAccess) in the Prod account by calling AssumeRole.\n\nSTS returns a set of temporary security credentials.\n\nAlice uses the temporary security credentials to access services and resources in the Prod account. Alice could, for example, make calls to Amazon S3 and Amazon EC2, which are granted by the WriteAccess role.\n\n\n\n\n\n\n\nUsing AWS Cognito to issue JSON Web Tokens (JWT) is incorrect because the Amazon Cognito service is primarily used for user authentication and not for providing access to your AWS resources. A JSON Web Token (JWT) is meant to be used for user authentication and session management.\n\nUsing AWS SSO is incorrect because although the AWS SSO service uses STS, it does not issue short-lived credentials by itself. AWS Single Sign-On (SSO) is a cloud SSO service that makes it easy to centrally manage SSO access to multiple AWS accounts and business applications.\n\nThe option that says All of the given options are correct is incorrect as only STS has the ability to provide temporary security credentials.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html\n\n\n\n\nCheck out this AWS IAM Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-identity-and-access-management-iam/"
  },
  {
      "questionNo": 14,
      "questionText": "You are working for a litigation firm as the Data Engineer for their case history application. You need to keep track of all the cases your firm has handled. The static assets like .jpg, .png, and .pdf files are stored in S3 for cost efficiency and high durability. As these files are critical to your business, you want to keep track of what's happening in your S3 bucket. You found out that S3 has an event notification whenever a delete or write operation happens within the S3 bucket.   \n\nWhat are the possible Event Notification destinations available for S3 buckets? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nLambda function\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nSES"
          },
          {
              "isCorrect": false,
              "text": "​\n\nKinesis"
          },
          {
              "isCorrect": false,
              "text": "​\n\nSWF"
          },
          {
              "isCorrect": true,
              "text": "​\nSQS\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nThe Amazon S3 notification feature enables you to receive notifications when certain events happen in your bucket. To enable notifications, you must first add a notification configuration identifying the events you want Amazon S3 to publish, and the destinations where you want Amazon S3 to send the event notifications.\n\nAmazon S3 supports the following destinations where it can publish events:\n\nAmazon Simple Notification Service (Amazon SNS) topic - A web service that coordinates and manages the delivery or sending of messages to subscribing endpoints or clients.\n\nAmazon Simple Queue Service (Amazon SQS) queue - Offers reliable and scalable hosted queues for storing messages as they travel between computer.\n\nAWS Lambda - AWS Lambda is a compute service where you can upload your code and the service can run the code on your behalf using the AWS infrastructure. You package up and upload your custom code to AWS Lambda when you create a Lambda function\n\nKinesis is incorrect because this is used to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information, and not used for event notifications. You have to use SNS, SQS or Lambda.\n\nSES is incorrect because this is mainly used for sending emails designed to help digital marketers and application developers send marketing, notification, and transactional emails, and not for sending event notifications from S3. You have to use SNS, SQS or Lambda.\n\nSWF is incorrect because this is mainly used to build applications that use Amazon's cloud to coordinate work across distributed components and not used as a way to trigger event notifications from S3. You have to use SNS, SQS or Lambda.\n\nHere’s what you need to do in order to start using this new feature with your application:\n\nCreate the queue, topic, or Lambda function (which I’ll call the target for brevity) if necessary.\n\nGrant S3 permission to publish to the target or invoke the Lambda function. For SNS or SQS, you do this by applying an appropriate policy to the topic or the queue. For Lambda, you must create and supply an IAM role, then associate it with the Lambda function.\n\nArrange for your application to be invoked in response to activity on the target. As you will see in a moment, you have several options here.\n\nSet the bucket’s Notification Configuration to point to the target.\n\n\n\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/"
  },
  {
      "questionNo": 15,
      "questionText": "A company has an enterprise web application hosted in an AWS Fargate cluster with an Amazon FSx for Lustre filesystem for its high performance computing workloads. A warm standby environment is running in another AWS region for disaster recovery. A Solutions Architect was assigned to design a system that will automatically route the live traffic to the disaster recovery (DR) environment only in the event that the primary application stack experiences an outage.\n\nWhat should the Architect do to satisfy this requirement?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nSet up a failover routing policy configuration in Route 53 by adding a health check on the primary service endpoint. Configure Route 53 to direct the DNS queries to the secondary record when the primary resource is unhealthy. Configure the network access control list and the route table to allow Route 53 to send requests to the endpoints specified in the health checks. Enable the Evaluate Target Health option by setting it to Yes.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up a CloudWatch Alarm to monitor the primary Route 53 DNS endpoint and create a custom Lambda function. Execute the ChangeResourceRecordSets API call using the function to initiate the failover to the secondary DNS record."
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up a Weighted routing policy configuration in Route 53 by adding health checks on both the primary stack and the DR environment. Configure the network access control list and the route table to allow Route 53 to send requests to the endpoints specified in the health checks. Enable the Evaluate Target Health option by setting it to Yes."
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up a CloudWatch Events rule to monitor the primary Route 53 DNS endpoint and create a custom Lambda function. Execute the ChangeResourceRecordSets API call using the function to initiate the failover to the secondary DNS record."
          }
      ],
      "explain": "Explanation\n\nUse an active-passive failover configuration when you want a primary resource or group of resources to be available majority of the time and you want a secondary resource or group of resources to be on standby in case all the primary resources become unavailable. When responding to queries, Route 53 includes only the healthy primary resources. If all the primary resources are unhealthy, Route 53 begins to include only the healthy secondary resources in response to DNS queries.\n\nTo create an active-passive failover configuration with one primary record and one secondary record, you just create the records and specify Failover for the routing policy. When the primary resource is healthy, Route 53 responds to DNS queries using the primary record. When the primary resource is unhealthy, Route 53 responds to DNS queries using the secondary record.\n\nYou can configure a health check that monitors an endpoint that you specify either by IP address or by domain name. At regular intervals that you specify, Route 53 submits automated requests over the Internet to your application, server, or other resource to verify that it's reachable, available, and functional. Optionally, you can configure the health check to make requests similar to those that your users make, such as requesting a web page from a specific URL.\n\n\n\n\n\n\n\nWhen Route 53 checks the health of an endpoint, it sends an HTTP, HTTPS, or TCP request to the IP address and port that you specified when you created the health check. For a health check to succeed, your router and firewall rules must allow inbound traffic from the IP addresses that the Route 53 health checkers use.\n\nHence, the correct answer is: Set up a failover routing policy configuration in Route 53 by adding a health check on the primary service endpoint. Configure Route 53 to direct the DNS queries to the secondary record when the primary resource is unhealthy. Configure the network access control list and the route table to allow Route 53 to send requests to the endpoints specified in the health checks. Enable the Evaluate Target Health option by setting it to Yes.\n\nThe option that says: Set up a Weighted routing policy configuration in Route 53 by adding health checks on both the primary stack and the DR environment. Configure the network access control list and the route table to allow Route 53 to send requests to the endpoints specified in the health checks. Enable the Evaluate Target Health option by setting it to Yes is incorrect because Weighted routing simply lets you associate multiple resources with a single domain name (tutorialsdojo.com) or subdomain name (blog.tutorialsdojo.com) and choose how much traffic is routed to each resource. This can be useful for a variety of purposes, including load balancing and testing new versions of software, but not for a failover configuration. Remember that the scenario says that the solution should automatically route the live traffic to the disaster recovery (DR) environment only in the event that the primary application stack experiences an outage. This configuration is incorrectly distributing the traffic on both the primary and DR environment.\n\nThe option that says: Set up a CloudWatch Alarm to monitor the primary Route 53 DNS endpoint and create a custom Lambda function. Execute the ChangeResourceRecordSets API call using the function to initiate the failover to the secondary DNS record is incorrect because setting up a CloudWatch Alarm and using the Route 53 API is not applicable nor useful at all in this scenario. Remember that CloudWatch Alam is primarily used for monitoring CloudWatch metrics. You have to use a Failover routing policy instead.\n\nThe option that says: Set up a CloudWatch Events rule to monitor the primary Route 53 DNS endpoint and create a custom Lambda function. Execute theChangeResourceRecordSets API call using the function to initiate the failover to the secondary DNS record is incorrect because the Amazon CloudWatch Events service is commonly used to deliver a near real-time stream of system events that describe changes in some Amazon Web Services (AWS) resources. There is no direct way for CloudWatch Events to monitor the status of your Route 53 endpoints. You have to configure a health check and a failover configuration in Route 53 instead to satisfy the requirement in this scenario.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-types.html\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-router-firewall-rules.html\n\n\n\n\nCheck out this Amazon Route 53 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-route-53/"
  },
  {
      "questionNo": 16,
      "questionText": "A start-up company that offers an intuitive financial data analytics service has consulted you about their AWS architecture. They have a fleet of Amazon EC2 worker instances that process financial data and then outputs reports which are used by their clients. You must store the generated report files in a durable storage. The number of files to be stored can grow over time as the start-up company is expanding rapidly overseas and hence, they also need a way to distribute the reports faster to clients located across the globe. \n\nWhich of the following is a cost-efficient and scalable storage option that you should use for this scenario?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nUse Amazon Redshift as the data storage and CloudFront as the CDN."
          },
          {
              "isCorrect": true,
              "text": "​\n\nUse Amazon S3 as the data storage and CloudFront as the CDN.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse multiple EC2 instance stores for data storage and ElastiCache as the CDN."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Amazon Glacier as the data storage and ElastiCache as the CDN."
          }
      ],
      "explain": "Explanation\n\nA Content Delivery Network (CDN) is a critical component of nearly any modern web application. It used to be that CDN merely improved the delivery of content by replicating commonly requested files (static content) across a globally distributed set of caching servers. However, CDNs have become much more useful over time.\n\nFor caching, a CDN will reduce the load on an application origin and improve the experience of the requestor by delivering a local copy of the content from a nearby cache edge, or Point of Presence (PoP). The application origin is off the hook for opening the connection and delivering the content directly as the CDN takes care of the heavy lifting. The end result is that the application origins don’t need to scale to meet demands for static content.\n\n\n\n\n\n\n\nAmazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment. CloudFront is integrated with AWS – both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services.\n\nAmazon S3 offers a highly durable, scalable, and secure destination for backing up and archiving your critical data. This is the correct option as the start-up company is looking for a durable storage to store the audio and text files. In addition, ElastiCache is only used for caching and not specifically as a Global Content Delivery Network (CDN).\n\nUsing Amazon Redshift as the data storage and CloudFront as the CDN is incorrect as Amazon Redshift is usually used as a Data Warehouse.\n\nUsing Amazon S3 Glacier as the data storage and ElastiCache as the CDN is incorrect as Amazon S3 Glacier is usually used for data archives.\n\nUsing multiple EC2 instance stores for data storage and ElastiCache as the CDN is incorrect as data stored in an instance store is not durable.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/s3/\n\nhttps://aws.amazon.com/caching/cdn/\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-s3/\n\n\n\n\nTutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-certified-solutions-architect-associate/"
  },
  {
      "questionNo": 17,
      "questionText": "You are working for an advertising company as their Senior Solutions Architect handling the S3 storage data. Your company has terabytes of data sitting on AWS S3 standard storage class, which accumulates significant operational costs. The management wants to cut down on the cost of their cloud infrastructure so you were instructed to switch to Glacier to lessen the cost per GB storage.   \n\nThe Amazon Glacier storage service is primarily used for which use case? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nStoring infrequently accessed data\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\nStoring Data archives\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nStoring cached session data"
          },
          {
              "isCorrect": false,
              "text": "​\nUsed as a data warehouse"
          },
          {
              "isCorrect": false,
              "text": "​\nUsed for active database storage"
          }
      ],
      "explain": "Explanation\n\nAmazon S3 Glacier is an extremely low-cost storage service that provides secure, durable, and flexible storage for data backup and archival. Amazon Glacier is designed to store data that is infrequently accessed. Amazon Glacier enables customers to offload the administrative burdens of operating and scaling storage to AWS so that they don’t have to worry about capacity planning, hardware provisioning, data replication, hardware failure detection and repair, or time-consuming hardware migrations.\n\nStoring cached session data is incorrect because this is the main use case for ElastiCache and not Amazon Glacier.\n\nThe option that says: Used for active database storage is incorrect because you should use RDS or DynamoDB for your active database storage as S3, in general, is used for storing your data or files.\n\nThe option that says: Used as a data warehouse is incorrect because storing it for data warehousing is the main use case of Amazon Redshift. It does not meet the requirement of being able to archive your infrequently accessed data. You can use S3 standard instead for frequently accessed data or Glacier for infrequently accessed data and archiving.\n\nIt is advisable to transition the standard data to infrequent access first then transition it to Amazon Glacier. You can specify in the lifecycle rule the time it will sit in standard tier and infrequent access. You can also delete the objects after a certain amount of time.\n\n\n\n\nIn transitioning S3 standard to Glacier you need to tell S3 which objects are to be archived to the new Glacier storage option, and under what conditions. You do this by setting up a lifecycle rule using the following elements:\n\nA prefix to specify which objects in the bucket are subject to the policy.\n\nA relative or absolute time specifier and a time period for transitioning objects to Glacier. The time periods are interpreted with respect to the object’s creation date. They can be relative (migrate items that are older than a certain number of days) or absolute (migrate items on a specific date)\n\nAn object age at which the object will be deleted from S3. This is measured from the original PUT of the object into the service, and the clock is not reset by a transition to Glacier.\n\n\n\n\nYou can create a lifecycle rule in the AWS Management Console.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/glacier/faqs/\n\n\n\n\nCheck out this Amazon Glacier Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-glacier/"
  },
  {
      "questionNo": 18,
      "questionText": "You are helping out a new DevOps Engineer to design her first architecture in AWS. She is planning to develop a highly available and fault-tolerant architecture which is composed of an Elastic Load Balancer and an Auto Scaling group of EC2 instances deployed across multiple Availability Zones. This will be used by an online accounting application which requires path-based routing, host-based routing, and bi-directional communication channels using WebSockets.\n\nWhich is the most suitable type of Elastic Load Balancer that you should recommend for her to use?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nClassic Load Balancer"
          },
          {
              "isCorrect": false,
              "text": "​\n\nNetwork Load Balancer"
          },
          {
              "isCorrect": true,
              "text": "​\n\nApplication Load Balancer\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nEither a Classic Load Balancer or a Network Load Balancer"
          }
      ],
      "explain": "Explanation\n\nElastic Load Balancing supports three types of load balancers. You can select the appropriate load balancer based on your application needs.\n\nIf you need flexible application management and TLS termination then we recommend that you use Application Load Balancer. If extreme performance and static IP is needed for your application then we recommend that you use Network Load Balancer. If your application is built within the EC2 Classic network then you should use Classic Load Balancer.\n\nAn Application Load Balancer functions at the application layer, the seventh layer of the Open Systems Interconnection (OSI) model. After the load balancer receives a request, it evaluates the listener rules in priority order to determine which rule to apply, and then selects a target from the target group for the rule action. You can configure listener rules to route requests to different target groups based on the content of the application traffic. Routing is performed independently for each target group, even when a target is registered with multiple target groups.\n\n\n\n\n\n\n\nApplication Load Balancers support path-based routing, host-based routing and support for containerized applications hence, Application Load Balancer is the correct answer.\n\nNetwork Load Balancer, Classic Load Balancer, and either a Classic Load Balancer or a Network Load Balancer are all incorrect as none of these support path-based routing and host-based routing, unlike an Application Load Balancer.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html#application-load-balancer-benefits\n\nhttps://aws.amazon.com/elasticloadbalancing/faqs/\n\n\n\n\nCheck out this AWS Elastic Load Balancing (ELB) Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-elastic-load-balancing-elb/\n\n\n\n\nHere is a deep dive on Elastic Load Balancing and Best Practices:\n\nhttps://youtu.be/VIgAT7vjol8\n\n\n\n\nApplication Load Balancer vs Network Load Balancer vs Classic Load Balancer:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-application-load-balancer-vs-network-load-balancer-vs-classic-load-balancer/"
  },
  {
      "questionNo": 19,
      "questionText": "You are working for an online hotel booking firm with terabytes of customer data coming from your websites and applications. There is an annual corporate meeting where you need to present the booking behavior and acquire new insights from your customers’ data. You are looking for a service to perform super-fast analytics on massive data sets in near real-time.   \n\nWhich of the following services gives you the ability to store huge amounts of data and perform quick and flexible queries on it? ",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nElastiCache"
          },
          {
              "isCorrect": false,
              "text": "​\nDynamoDB"
          },
          {
              "isCorrect": true,
              "text": "​\nRedshift\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nRDS"
          }
      ],
      "explain": "Explanation\n\nAmazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake. Redshift delivers ten times faster performance than other data warehouses by using machine learning, massively parallel query execution, and columnar storage on high-performance disk.\n\nDynamoDB is incorrect. DynamoDB is a NoSQL database which is based on key-value pairs used for fast processing of small data that dynamically grows and changes. But if you need to scan large amounts of data (ie a lot of keys all in one query), the performance will not be optimal.\n\nElastiCache is incorrect because this is used to increase the performance, speed and redundancy with which applications can retrieve data by providing an in-memory database caching system, and not for database analytical processes.\n\nRDS is incorrect because this is mainly used for On-Line Transaction Processing (OLTP) applications and not for Online Analytics Processing (OLAP).\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html\n\nhttps://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html\n\n\n\n\nCheck out this Amazon Redshift Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-redshift/"
  },
  {
      "questionNo": 20,
      "questionText": "Your customer is building an internal application that serves as a repository for images uploaded by a couple of users. Whenever a user uploads an image, it would be sent to Kinesis for processing before it is stored in an S3 bucket. Afterwards, if the upload was successful, the application will return a prompt telling the user that the upload is successful. The entire processing typically takes about 5 minutes to finish.\n\nWhich of the following options will allow you to asynchronously process the request to the application from upload request to Kinesis, S3, and return reply, in the most cost-effective manner?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nUse a combination of SNS to buffer the requests and then asynchronously process them using On-Demand EC2 Instances."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse a combination of SQS to queue the requests and then asynchronously process them using On-Demand EC2 Instances."
          },
          {
              "isCorrect": true,
              "text": "​\n\nCreate a Lambda function that will asynchronously process the requests.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse a combination of Lambda and Step Functions to orchestrate service components and asynchronously process the requests."
          }
      ],
      "explain": "Explanation\n\nAWS Lambda supports synchronous and asynchronous invocation of a Lambda function. You can control the invocation type only when you invoke a Lambda function. When you use an AWS service as a trigger, the invocation type is predetermined for each service. You have no control over the invocation type that these event sources use when they invoke your Lambda function. Since the processing only takes 5 minutes, Lambda is also a cost-effective choice.\n\n\n\n\n\n\n\nUsing a combination of Lambda and Step Functions to orchestrate service components and asynchronously process the requests is incorrect because the AWS Step Functions service lets you coordinate multiple AWS services into serverless workflows so you can build and update apps quickly. Although this can be a valid solution, it is not cost-effective since the application does not have a lot of components to orchestrate. Lambda functions can effectively meet the requirements in this scenario without using Step Functions. This service is not as cost-effective as Lambda.\n\nUsing a combination of SQS to queue the requests and then asynchronously processing them using On-Demand EC2 Instances and Using a combination of SNS to buffer the requests and then asynchronously processing them using On-Demand EC2 Instances are both incorrect as using On-Demand EC2 instances is not cost-effective. It is better to use a Lambda function instead.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/welcome.html\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html\n\n\n\n\nCheck out this AWS Lambda Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-lambda/\n\n\n\n\nTutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-certified-solutions-architect-associate/"
  },
  {
      "questionNo": 21,
      "questionText": "An online events registration system is hosted in AWS and uses ECS to host its front-end tier and a Multi-AZ RDS for its database tier, which also has a standby replica. What are the events that will make Amazon RDS automatically perform a failover to the standby replica? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nStorage failure on primary\n\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\nLoss of availability in primary Availability Zone\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nStorage failure on secondary DB instance"
          },
          {
              "isCorrect": false,
              "text": "​\n\nIn the event of Read Replica failure"
          },
          {
              "isCorrect": false,
              "text": "​\n\nCompute unit failure on secondary DB instance"
          }
      ],
      "explain": "Explanation\n\nAmazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments. Amazon RDS uses several different technologies to provide failover support. Multi-AZ deployments for Oracle, PostgreSQL, MySQL, and MariaDB DB instances use Amazon's failover technology. SQL Server DB instances use SQL Server Database Mirroring (DBM).\n\nIn a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption.\n\nAmazon RDS detects and automatically recovers from the most common failure scenarios for Multi-AZ deployments so that you can resume database operations as quickly as possible without administrative intervention.\n\n\n\n\n\n\n\nThe high-availability feature is not a scaling solution for read-only scenarios; you cannot use a standby replica to serve read traffic. To service read-only traffic, you should use a Read Replica.\n\nAmazon RDS automatically performs a failover in the event of any of the following:\n\nLoss of availability in primary Availability Zone\n\nLoss of network connectivity to primary\n\nCompute unit failure on primary\n\nStorage failure on primary\n\n\n\n\nThe following options are incorrect because all these scenarios do not affect the primary database. Automatic failover only occurs if the primary database is the one that is affected.\n\n- Storage failure on secondary DB instance\n\n- In the event of Read Replica failure\n\n- Compute unit failure on secondary DB instance\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-relational-database-service-amazon-rds/"
  },
  {
      "questionNo": 22,
      "questionText": "You have a cryptocurrency exchange portal which is hosted in an Auto Scaling group of EC2 instances behind an Application Load Balancer, and are deployed across multiple AWS regions. Your users can be found all around the globe, but the majority are from Japan and Sweden. Because of the compliance requirements in these two locations, you want your Japanese users to connect to the servers in the ap-northeast-1 Asia Pacific (Tokyo) region, while your Swedish users should be connected to the servers in the eu-west-1 EU (Ireland) region.\n\nWhich of the following services would allow you to easily fulfill this requirement?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nUse Route 53 Geolocation Routing policy.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up an Application Load Balancers that will automatically route the traffic to the proper AWS region."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Route 53 Weighted Routing policy."
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up a new CloudFront web distribution with the geo-restriction feature enabled."
          }
      ],
      "explain": "Explanation\n\nGeolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from. For example, you might want all queries from Europe to be routed to an ELB load balancer in the Frankfurt region.\n\nWhen you use geolocation routing, you can localize your content and present some or all of your website in the language of your users. You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights. Another possible use is for balancing load across endpoints in a predictable, easy-to-manage way, so that each user location is consistently routed to the same endpoint.\n\n\n\n\n\n\n\nSetting up an Application Load Balancers that will automatically route the traffic to the proper AWS region is incorrect because Elastic Load Balancers distribute traffic among EC2 instances across multiple Availability Zones but not across AWS regions.\n\nSetting up a new CloudFront web distribution with the geo-restriction feature enabled is incorrect because the CloudFront geo-restriction feature is primarily used to prevent users in specific geographic locations from accessing content that you're distributing through a CloudFront web distribution. It does not let you choose the resources that serve your traffic based on the geographic location of your users, unlike the Geolocation routing policy in Route 53.\n\nUsing Route 53 Weighted Routing policy is incorrect because this is not a suitable solution to meet the requirements of this scenario. It just lets you associate multiple resources with a single domain name (tutorialsdojo.com) or subdomain name (forums.tutorialsdojo.com) and choose how much traffic is routed to each resource. You have to use a Geolocation routing policy instead.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/geolocation-routing-policy\n\n\n\n\nCheck out this Amazon Route 53 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-route-53/\n\n\n\n\nLatency Routing vs Geoproximity Routing vs Geolocation Routing:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-latency-routing-vs-geoproximity-routing-vs-geolocation-routing/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/"
  },
  {
      "questionNo": 23,
      "questionText": "All objects uploaded to an Amazon S3 bucket must be encrypted for security compliance. The bucket will use server-side encryption with Amazon S3-Managed encryption keys (SSE-S3) to encrypt data using 256-bit Advanced Encryption Standard (AES-256) block cipher.\n\nWhich of the following request headers must be used?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nx-amz-server-side-encryption-customer-key-MD5"
          },
          {
              "isCorrect": true,
              "text": "​\n\nx-amz-server-side-encryption\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nx-amz-server-side-encryption-customer-algorithm"
          },
          {
              "isCorrect": false,
              "text": "​\n\nx-amz-server-side-encryption-customer-key"
          }
      ],
      "explain": "Explanation\n\nServer-side encryption protects data at rest. If you use Server-Side Encryption with Amazon S3-Managed Encryption Keys (SSE-S3), Amazon S3 will encrypt each object with a unique key and as an additional safeguard, it encrypts the key itself with a master key that it rotates regularly. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.\n\nIf you need server-side encryption for all of the objects that are stored in a bucket, use a bucket policy. For example, the following bucket policy denies permissions to upload an object unless the request includes the x-amz-server-side-encryption header to request server-side encryption:\n\nHowever, if you chose to use server-side encryption with customer-provided encryption keys (SSE-C), you must provide encryption key information using the following request headers:\n\nx-amz-server-side​-encryption​-customer-algorithm\n\nx-amz-server-side​-encryption​-customer-key\n\nx-amz-server-side​-encryption​-customer-key-MD5\n\nHence, using the x-amz-server-side-encryption header is correct as this is the one being used for Amazon S3-Managed Encryption Keys (SSE-S3).\n\nAll other options are incorrect since they are used for SSE-C.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-s3/"
  },
  {
      "questionNo": 24,
      "questionText": "As part of the Business Continuity Plan of your company, your IT Director instructed you to set up an automated backup of all of the EBS Volumes for your EC2 instances as soon as possible. \n\nWhat is the fastest and most cost-effective solution to automatically back up all of your EBS Volumes?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nSet your Amazon Storage Gateway with EBS volumes as the data source and store the backups in your on-premises servers through the storage gateway."
          },
          {
              "isCorrect": false,
              "text": "​\n\nFor an automated solution, create a scheduled job that calls the \"create-snapshot\" command via the AWS CLI to take a snapshot of production EBS volumes periodically. "
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse an EBS-cycle policy in Amazon S3 to automatically back up the EBS volumes."
          },
          {
              "isCorrect": true,
              "text": "​\n\nUse Amazon Data Lifecycle Manager (Amazon DLM) to automate the creation of EBS snapshots.\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nYou can use Amazon Data Lifecycle Manager (Amazon DLM) to automate the creation, retention, and deletion of snapshots taken to back up your Amazon EBS volumes. Automating snapshot management helps you to:\n\n- Protect valuable data by enforcing a regular backup schedule.\n\n- Retain backups as required by auditors or internal compliance.\n\n- Reduce storage costs by deleting outdated backups.\n\n\n\n\nCombined with the monitoring features of Amazon CloudWatch Events and AWS CloudTrail, Amazon DLM provides a complete backup solution for EBS volumes at no additional cost.\n\nHence, using Amazon Data Lifecycle Manager (Amazon DLM) to automate the creation of EBS snapshots is the correct answer as it is the fastest and most cost-effective solution that provides an automated way of backing up your EBS volumes.\n\nThe option that says: For an automated solution, create a scheduled job that calls the \"create-snapshot\" command via the AWS CLI to take a snapshot of production EBS volumes periodically is incorrect because even though this is a valid solution, you would still need additional time to create a scheduled job that calls the \"create-snapshot\" command. It would be better to use Amazon Data Lifecycle Manager (Amazon DLM) instead as this provides you the fastest solution which enables you to automate the creation, retention, and deletion of the EBS snapshots without having to write custom shell scripts or creating scheduled jobs.\n\nSetting your Amazon Storage Gateway with EBS volumes as the data source and storing the backups in your on-premises servers through the storage gateway is incorrect as the Amazon Storage Gateway is used only for creating a backup of data from your on-premises server and not from the Amazon Virtual Private Cloud.\n\nUsing an EBS-cycle policy in Amazon S3 to automatically back up the EBS volumes is incorrect as there is no such thing as EBS-cycle policy in Amazon S3.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html\n\n\n\n\nCheck out this Amazon EBS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-ebs/"
  },
  {
      "questionNo": 25,
      "questionText": "You are working as a Solutions Architect for an investment bank and your Chief Technical Officer intends to migrate all of your applications to AWS. You are looking for block storage to store all of your data and have decided to go with EBS volumes. Your boss is worried that EBS volumes are not appropriate for your workloads due to compliance requirements, downtime scenarios, and IOPS performance.   \n\nWhich of the following are valid points in proving that EBS is the best service to use for your migration? (Select TWO.)",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nAmazon EBS provides the ability to create snapshots (backups) of any EBS volume and write a copy of the data in the volume to Amazon RDS, where it is stored redundantly in multiple Availability Zones"
          },
          {
              "isCorrect": false,
              "text": "​\nEBS volumes can be attached to any EC2 Instance in any Availability Zone."
          },
          {
              "isCorrect": true,
              "text": "​\nEBS volumes support live configuration changes while in production which means that you can modify the volume type, volume size, and IOPS capacity without service interruptions.\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\nAn EBS volume is off-instance storage that can persist independently from the life of an instance.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nWhen you create an EBS volume in an Availability Zone, it is automatically replicated on a separate AWS region to prevent data loss due to a failure of any single hardware component."
          }
      ],
      "explain": "Explanation\n\nAn Amazon EBS volume is a durable, block-level storage device that you can attach to a single EC2 instance. You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an instance or storage for a database application. You can also use them for throughput-intensive applications that perform continuous disk scans. EBS volumes persist independently from the running life of an EC2 instance.\n\nHere is a list of important information about EBS Volumes:\n\n- When you create an EBS volume in an Availability Zone, it is automatically replicated within that zone to prevent data loss due to a failure of any single hardware component.\n\n- An EBS volume can only be attached to one EC2 instance at a time.\n\n- After you create a volume, you can attach it to any EC2 instance in the same Availability Zone\n\n- An EBS volume is off-instance storage that can persist independently from the life of an instance. You can specify not to terminate the EBS volume when you terminate the EC2 instance during instance creation.\n\n- EBS volumes support live configuration changes while in production which means that you can modify the volume type, volume size, and IOPS capacity without service interruptions.\n\n- Amazon EBS encryption uses 256-bit Advanced Encryption Standard algorithms (AES-256)\n\n- EBS Volumes offer 99.999% SLA.\n\n\n\n\nThe option that says: When you create an EBS volume in an Availability Zone, it is automatically replicated on a separate AWS region to prevent data loss due to a failure of any single hardware component is incorrect because when you create an EBS volume in an Availability Zone, it is automatically replicated within that zone only, and not on a separate AWS region, to prevent data loss due to a failure of any single hardware component.\n\nThe option that says: EBS volumes can be attached to any EC2 Instance in any Availability Zone is incorrect as EBS volumes can only be attached to an EC2 instance in the same Availability Zone.\n\nThe option that says: Amazon EBS provides the ability to create snapshots (backups) of any EBS volume and write a copy of the data in the volume to Amazon RDS, where it is stored redundantly in multiple Availability Zones is almost correct. But instead of storing the volume to Amazon RDS, the EBS Volume snapshots are actually sent to Amazon S3.\n\n\n\n\nReferences:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html\n\nhttps://aws.amazon.com/ebs/features/\n\n\n\n\nCheck out this Amazon EBS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-ebs/\n\n\n\n\nHere is a short video tutorial on EBS:\n\nhttps://youtu.be/ljYH5lHQdxo"
  },
  {
      "questionNo": 26,
      "questionText": "A software company has resources hosted in AWS and on-premises servers. You have been requested to create a decoupled architecture for applications which make use of both resources.\n\nWhich of the following options are valid? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nUse SQS to utilize both on-premises servers and EC2 instances for your decoupled application\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nUse Amazon Simple Decoupling Service to utilize both on-premises servers and EC2 instances for your decoupled application"
          },
          {
              "isCorrect": false,
              "text": "​\nUse RDS to utilize both on-premises servers and EC2 instances for your decoupled application"
          },
          {
              "isCorrect": true,
              "text": "​\nUse SWF to utilize both on-premises servers and EC2 instances for your decoupled application\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nUse DynamoDB to utilize both on-premises servers and EC2 instances for your decoupled application"
          }
      ],
      "explain": "Explanation\n\nAmazon Simple Queue Service (SQS) and Amazon Simple Workflow Service (SWF) are the services that you can use for creating a decoupled architecture in AWS. Decoupled architecture is a type of computing architecture that enables computing components or layers to execute independently while still interfacing with each other.\n\nAmazon SQS offers reliable, highly-scalable hosted queues for storing messages while they travel between applications or microservices. Amazon SQS lets you move data between distributed application components and helps you decouple these components. Amazon SWF is a web service that makes it easy to coordinate work across distributed application components.\n\nUsing RDS to utilize both on-premises servers and EC2 instances for your decoupled application and using DynamoDB to utilize both on-premises servers and EC2 instances for your decoupled application are incorrect as RDS and DynamoDB are database services.\n\nUsing Amazon Simple Decoupling Service to utilize both on-premises servers and EC2 instances for your decoupled application is incorrect because there is no such thing as Amazon Simple Decoupling Service.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/sqs/\n\nhttp://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-welcome.html\n\n\n\n\nCheck out this Amazon SQS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-sqs/\n\n\n\n\nAmazon Simple Workflow (SWF) vs AWS Step Functions vs Amazon SQS:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-simple-workflow-swf-vs-aws-step-functions-vs-amazon-sqs/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/"
  },
  {
      "questionNo": 27,
      "questionText": "A San Francisco-based tech startup is building a cross-platform mobile app that can notify the user with upcoming astronomical events such as eclipses, blue moon, novae or a meteor shower. Your mobile app authenticates with the Identity Provider (IdP) using the provider's SDK and Amazon Cognito. Once the end user is authenticated with the IdP, the OAuth or OpenID Connect token returned from the IdP is passed by your app to Amazon Cognito.\n\nWhich of the following is returned for the user to provide a set of temporary, limited-privilege AWS credentials?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nCognito API"
          },
          {
              "isCorrect": true,
              "text": "​\n\nCognito ID\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nCognito SDK"
          },
          {
              "isCorrect": false,
              "text": "​\n\nCognito Key Pair"
          }
      ],
      "explain": "Explanation\n\nYou can use Amazon Cognito to deliver temporary, limited-privilege credentials to your application so that your users can access AWS resources. Amazon Cognito identity pools support both authenticated and unauthenticated identities. You can retrieve a unique Amazon Cognito identifier (identity ID) for your end user immediately if you're allowing unauthenticated users or after you've set the login tokens in the credentials provider if you're authenticating users.\n\nThat is why the correct answer for this question is Cognito ID.\n\nCognito SDK is incorrect because this is not a unique Amazon Cognito identifier but a software development kit that is available in various programming languages.\n\nCognito Key Pair is incorrect because this is not a unique Amazon Cognito identifier but a cryptography key.\n\nCognito API is incorrect because this is not a unique Amazon Cognito identifier and is primarily used as an Application Programming Interface.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html"
  },
  {
      "questionNo": 28,
      "questionText": "To protect your enterprise applications against unauthorized access, you configured multiple rules for your Network ACLs in your VPC. How are the access rules evaluated?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nNetwork ACL Rules are evaluated by rule number, from lowest to highest, and executed after all rules are checked for conflicting allow/deny rules."
          },
          {
              "isCorrect": false,
              "text": "​\nBy default, all Network ACL Rules are evaluated before any traffic is allowed or denied."
          },
          {
              "isCorrect": true,
              "text": "​\nNetwork ACL Rules are evaluated by rule number, from lowest to highest, and executed immediately when a matching allow/deny rule is found.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nNetwork ACL Rules are evaluated by rule number, from highest to lowest and are executed immediately when a matching allow/deny rule is found."
          }
      ],
      "explain": "Explanation\n\nA network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. You might set up network ACLs with rules similar to your security groups in order to add an additional layer of security to your VPC.\n\nNetwork ACL Rules are evaluated by rule number, from lowest to highest, and executed immediately when a matching allow/deny rule is found.\n\n\n\n\n\n\n\nThe option that says: Network ACL Rules are evaluated by rule number, from highest to lowest and are executed immediately when a matching allow/deny rule is found is incorrect since rules are evaluated from lowest to highest, not the other way around.\n\nThe option that says: By default, all Network ACL Rules are evaluated before any traffic is allowed or denied is incorrect because the Network ACL Rules are evaluated by rule number, from lowest to highest, and executed immediately when a matching allow/deny rule is found.\n\nThe option that says: Network ACL Rules are evaluated by rule number, from lowest to highest, and executed after all rules are checked for conflicting allow/deny rules is incorrect since rules are executed immediately when a match is found and not after all rules are checked for conflicting allow/deny rules.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/\n\n\n\n\nHere is a handy comparison between Network ACL and Security Groups:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-security-group-vs-nacl/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/"
  },
  {
      "questionNo": 29,
      "questionText": "You are developing a meal planning application that provides meal recommendations for the week as well as the food consumption of your users. Your application resides on an EC2 instance which requires access to various AWS services for its day-to-day operations.   \n\nWhich of the following is the best way to allow your EC2 instance to access your S3 bucket and other AWS services?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nAdd the API Credentials in the Security Group and assign it to the EC2 instance."
          },
          {
              "isCorrect": false,
              "text": "​\nStore the API credentials in the EC2 instance."
          },
          {
              "isCorrect": false,
              "text": "​\nStore the API credentials in a bastion host."
          },
          {
              "isCorrect": true,
              "text": "​\nCreate a role in IAM and assign it to the EC2 instance.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nThe best practice in handling API Credentials is to create a new role in the Identity Access Management (IAM) service and then assign it to a specific EC2 instance. In this way, you have a secure and centralized way of storing and managing your credentials.\n\nStoring the API credentials in the EC2 instance, adding the API Credentials in the Security Group and assigning it to the EC2 instance, and storing the API credentials in a bastion host are incorrect because it is not secure to store nor use the API credentials from an EC2 instance. You should use IAM service instead.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html\n\n\n\n\nCheck out this AWS IAM Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-identity-and-access-management-iam/"
  },
  {
      "questionNo": 30,
      "questionText": "A media company has two VPCs: VPC-1 and VPC-2 with peering connection between each other. VPC-1 only contains private subnets while VPC-2 only contains public subnets. The company uses a single AWS Direct Connect connection and a virtual interface to connect their on-premises network with VPC-1.\n\nWhich of the following options increase the fault tolerance of the connection to VPC-1? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nEstablish a hardware VPN over the Internet between VPC-1 and the on-premises network.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nEstablish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2."
          },
          {
              "isCorrect": false,
              "text": "​\nEstablish a hardware VPN over the Internet between VPC-2 and the on-premises network."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse the AWS VPN CloudHub to create a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2."
          },
          {
              "isCorrect": true,
              "text": "​\nEstablish another AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nIn this scenario, you have two VPCs which have peering connections with each other. Note that a VPC peering connection does not support edge to edge routing. This means that if either VPC in a peering relationship has one of the following connections, you cannot extend the peering relationship to that connection:\n\n- A VPN connection or an AWS Direct Connect connection to a corporate network\n\n- An Internet connection through an Internet gateway\n\n- An Internet connection in a private subnet through a NAT device\n\n- A gateway VPC endpoint to an AWS service; for example, an endpoint to Amazon S3.\n\n- (IPv6) A ClassicLink connection. You can enable IPv4 communication between a linked EC2-Classic instance and instances in a VPC on the other side of a VPC peering connection. However, IPv6 is not supported in EC2-Classic, so you cannot extend this connection for IPv6 communication.\n\n\n\n\nFor example, if VPC A and VPC B are peered, and VPC A has any of these connections, then instances in VPC B cannot use the connection to access resources on the other side of the connection. Similarly, resources on the other side of a connection cannot use the connection to access VPC B.\n\nHence, this means that you cannot use VPC-2 to extend the peering relationship that exists between VPC-1 and the on-premises network. For example, traffic from the corporate network can't directly access VPC-1 by using the VPN connection or the AWS Direct Connect connection to VPC-2, which is why the following options are incorrect:\n\n- Use the AWS VPN CloudHub to create a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2.\n\n- Establish a hardware VPN over the Internet between VPC-2 and the on-premises network.\n\n- Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2.\n\nYou can do the following to provide a highly available, fault-tolerant network connection:\n\n- Establish a hardware VPN over the Internet between the VPC and the on-premises network.\n\n- Establish another AWS Direct Connect connection and private virtual interface in the same AWS region.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html#edge-to-edge-vgw\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/configure-vpn-backup-dx/\n\nhttps://aws.amazon.com/answers/networking/aws-multiple-data-center-ha-network-connectivity/\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/"
  },
  {
      "questionNo": 31,
      "questionText": "Both historical records and frequently accessed data are stored on an on-premises storage system. The amount of current data is growing at an exponential rate. As the storage’s capacity is nearing its limit, the company’s Solutions Architect has decided to move the historical records to AWS to free up space for the active data.\n\nWhich of the following architectures deliver the best solution in terms of cost and operational management?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nUse AWS Storage Gateway to move the historical records from on-premises to AWS. Choose Amazon S3 Glacier to be the destination for the data. Modify the S3 lifecycle configuration to move the data from the Standard tier to Amazon S3 Glacier Deep Archive after 30 days."
          },
          {
              "isCorrect": true,
              "text": "​\n\nUse AWS DataSync to move the historical records from on-premises to AWS. Choose Amazon S3 Glacier Deep Archive to be the destination for the data.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse AWS DataSync to move the historical records from on-premises to AWS. Choose Amazon S3 Standard to be the destination for the data. Modify the S3 lifecycle configuration to move the data from the Standard tier to Amazon S3 Glacier Deep Archive after 30 days."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse AWS Storage Gateway to move the historical records from on-premises to AWS. Choose Amazon S3 Glacier Deep Archive to be the destination for the data."
          }
      ],
      "explain": "Explanation\n\nAWS DataSync makes it simple and fast to move large amounts of data online between on-premises storage and Amazon S3, Amazon Elastic File System (Amazon EFS), or Amazon FSx for Windows File Server. Manual tasks related to data transfers can slow down migrations and burden IT operations. DataSync eliminates or automatically handles many of these tasks, including scripting copy jobs, scheduling, and monitoring transfers, validating data, and optimizing network utilization. The DataSync software agent connects to your Network File System (NFS), Server Message Block (SMB) storage, and your self-managed object storage, so you don’t have to modify your applications.\n\nDataSync can transfer hundreds of terabytes and millions of files at speeds up to 10 times faster than open-source tools, over the Internet or AWS Direct Connect links. You can use DataSync to migrate active data sets or archives to AWS, transfer data to the cloud for timely analysis and processing, or replicate data to AWS for business continuity. Getting started with DataSync is easy: deploy the DataSync agent, connect it to your file system, select your AWS storage resources, and start moving data between them. You pay only for the data you move.\n\nSince the problem is mainly about moving historical records from on-premises to AWS, using AWS DataSync is a more suitable solution. You can use DataSync to move cold data from expensive on-premises storage systems directly to durable and secure long-term storage, such as Amazon S3 Glacier or Amazon S3 Glacier Deep Archive.\n\nHence, the correct answer is the option that says: Use AWS DataSync to move the historical records from on-premises to AWS. Choose Amazon S3 Glacier Deep Archive to be the destination for the data.\n\nThe following options are both incorrect:\n\n- Use AWS Storage Gateway to move the historical records from on-premises to AWS. Choose Amazon S3 Glacier Deep Archive to be the destination for the data.\n\n- Use AWS Storage Gateway to move the historical records from on-premises to AWS. Choose Amazon S3 Glacier to be the destination for the data. Modify the S3 lifecycle configuration to move the data from the Standard tier to Amazon S3 Glacier Deep Archive after 30 days.\n\nAlthough you can copy data from on-premises to AWS with Storage Gateway, it is not suitable for transferring large sets of data to AWS. Storage Gateway is mainly used in providing low-latency access to data by caching frequently accessed data on-premises while storing archive data securely and durably in Amazon cloud storage services. Storage Gateway optimizes data transfer to AWS by sending only changed data and compressing data.\n\nThe option that says: Use AWS DataSync to move the historical records from on-premises to AWS. Choose Amazon S3 Standard to be the destination for the data. Modify the S3 lifecycle configuration to move the data from the Standard tier to Amazon S3 Glacier Deep Archive after 30 days is incorrect because, with AWS DataSync, you can transfer data from on-premises directly to Amazon S3 Glacier Deep Archive. You don’t have to configure the S3 lifecycle policy and wait for 30 days to move the data to Glacier Deep Archive.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/datasync/faqs/\n\nhttps://aws.amazon.com/storagegateway/faqs/\n\n\n\n\nCheck out these AWS DataSync and Storage Gateway Cheat Sheets:\n\nhttps://tutorialsdojo.com/aws-datasync/\n\nhttps://tutorialsdojo.com/aws-storage-gateway/"
  },
  {
      "questionNo": 32,
      "questionText": "You are building a transcription service for a company in which a fleet of EC2 worker instances processes an uploaded audio file and generates a text file as an output. You must store both of these frequently accessed files in the same durable storage until the text file is retrieved by the uploader. Due to an expected surge in demand, you have to ensure that the storage is scalable and can be retrieved within minutes.\n\nWhich storage option in AWS can you use in this situation, which is both cost-efficient and scalable?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nMultiple Amazon EBS volume with snapshots"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAmazon S3 Glacier Deep Archive"
          },
          {
              "isCorrect": true,
              "text": "​\nA single Amazon S3 bucket\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nMultiple instance stores"
          }
      ],
      "explain": "Explanation\n\nIn this scenario, the best option is to use Amazon S3. It’s a simple storage service that offers a highly-scalable, reliable, and low-latency data storage infrastructure at very low costs.\n\nMultiple Amazon EBS volume with snapshots and Multiple instance stores are incorrect because these services do not provide durable storage.\n\nAmazon S3 Glacier Deep Archive is incorrect because this is mainly used for data archives with data retrieval times that can take more than 12 hours. Hence, it is not suitable for the transcription service where the data are stored and frequently accessed.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/s3/faqs/\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/"
  },
  {
      "questionNo": 33,
      "questionText": "You have set up a VPC with public subnet and an Internet gateway. You set up an EC2 instance with a public IP as well. However, you are still not able to connect to the instance via the Internet. You checked its associated security group and it seems okay.\n\nWhat should you do to ensure you can connect to the EC2 instance from the Internet?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nCheck the CloudWatch logs as there must be some issue in the EC2 instance."
          },
          {
              "isCorrect": true,
              "text": "​\nCheck the main route table and ensure that the right route entry to the Internet Gateway (IGW) is configured.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nSet an Elastic IP Address to the EC2 instance."
          },
          {
              "isCorrect": false,
              "text": "​\nSet a Secondary Private IP Address to the EC2 instance."
          }
      ],
      "explain": "Explanation\n\nThe route table entries enable EC2 instances in the subnet to use IPv4 to communicate with other instances in the VPC, and to communicate directly over the Internet. A subnet that's associated with a route table that has a route to an Internet gateway is known as a public subnet.\n\nIf you could not connect to your EC2 instance even if there is already an Internet Gateway in your VPC and there is no issue in the security group, then you must check if the entries in the route table are properly configured.\n\nSetting an Elastic IP Address to the EC2 instance is incorrect since you already have a public IP address for your EC2 instance, and doesn't require an EIP anymore.\n\nSetting a Secondary Private IP Address to the EC2 instance is incorrect because having a secondary private IP address is only used within the VPC, not when connecting to the outside Internet.\n\nChecking the CloudWatch logs as there must be some issue in the EC2 instance is incorrect because it is better to go through your setup and make sure that you didn't miss a step, such as adding a route in the route table, before you check the actual CloudWatch logs to see if an instance has an issue.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario1.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/"
  },
  {
      "questionNo": 34,
      "questionText": "For data privacy, a healthcare company has been asked to comply with the Health Insurance Portability and Accountability Act (HIPAA). The company stores all its backups on an Amazon S3 bucket. It is required that data stored on the S3 bucket must be encrypted.\n\nWhat is the best option to do this? (Select TWO.)",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nStore the data on EBS volumes with encryption enabled instead of using Amazon S3."
          },
          {
              "isCorrect": true,
              "text": "​\nEnable Server-Side Encryption on an S3 bucket to make use of AES-256 encryption.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nStore the data in encrypted EBS snapshots."
          },
          {
              "isCorrect": false,
              "text": "​\nEnable Server-Side Encryption on an S3 bucket to make use of AES-128 encryption."
          },
          {
              "isCorrect": true,
              "text": "​\nBefore sending the data to Amazon S3 over HTTPS, encrypt the data locally first using your own encryption keys.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nServer-side encryption is about data encryption at rest—that is, Amazon S3 encrypts your data at the object level as it writes it to disks in its data centers and decrypts it for you when you access it. As long as you authenticate your request and you have access permissions, there is no difference in the way you access encrypted or unencrypted objects. For example, if you share your objects using a pre-signed URL, that URL works the same way for both encrypted and unencrypted objects.\n\n\n\n\n\n\n\nYou have three mutually exclusive options depending on how you choose to manage the encryption keys:\n\nUse Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)\n\nUse Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)\n\nUse Server-Side Encryption with Customer-Provided Keys (SSE-C)\n\n\n\n\nThe options that say: Before sending the data to Amazon S3 over HTTPS, encrypt the data locally first using your own encryption keys and Enable Server-Side Encryption on an S3 bucket to make use of AES-256 encryption are correct because these options are using client-side encryption and Amazon S3-Managed Keys (SSE-S3) respectively. Client-side encryption is the act of encrypting data before sending it to Amazon S3 while SSE-S3 uses AES-256 encryption.\n\nStoring the data on EBS volumes with encryption enabled instead of using Amazon S3 and storing the data in encrypted EBS snapshots are incorrect because both options use EBS encryption and not S3.\n\nEnabling Server-Side Encryption on an S3 bucket to make use of AES-128 encryption is incorrect as S3 doesn't provide AES-128 encryption, only AES-256.\n\n\n\n\nReferences:\n\nhttp://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/\n\n\n\n\nTutorials Dojo's AWS Certified Solutions Architect Associate Exam Study Guide:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-certified-solutions-architect-associate/"
  },
  {
      "questionNo": 35,
      "questionText": "One of your EC2 instances is reporting an unhealthy system status check. The operations team is looking for an easier way to monitor and repair these instances instead of fixing them manually.\n\nHow will you automate the monitoring and repair of the system status check failure in an AWS environment?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nWrite a python script that queries the EC2 API for each instance status check"
          },
          {
              "isCorrect": false,
              "text": "​\nWrite a shell script that periodically shuts down and starts instances based on certain stats."
          },
          {
              "isCorrect": true,
              "text": "​\n\nCreate CloudWatch alarms that stop and start the instance based on status check alarms.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nBuy and implement a third party monitoring tool."
          }
      ],
      "explain": "Explanation\n\nUsing Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your EC2 instances. You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.\n\nWriting a python script that queries the EC2 API for each instance status check, writing a shell script that periodically shuts down and starts instances based on certain stats, and buying and implementing a third party monitoring tool are all incorrect because it is unnecessary to go through such lengths when CloudWatch Alarms already has such a feature for you, offered at a low cost.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/"
  },
  {
      "questionNo": 36,
      "questionText": "An application is hosted in AWS Fargate and uses RDS database in Multi-AZ Deployments configuration with several Read Replicas. A Solutions Architect was instructed to ensure that all of their database credentials, API keys, and other secrets are encrypted and rotated on a regular basis to improve data security. The application should also use the latest version of the encrypted credentials when connecting to the RDS database.\n\nWhich of the following is the MOST appropriate solution to secure the credentials?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nStore the database credentials, API keys, and other secrets to Systems Manager Parameter Store each with a SecureString data type. The credentials are automatically rotated by default."
          },
          {
              "isCorrect": false,
              "text": "​\n\nStore the database credentials, API keys, and other secrets to AWS ACM."
          },
          {
              "isCorrect": true,
              "text": "​\n\nUse AWS Secrets Manager to store and encrypt the database credentials, API keys, and other secrets. Enable automatic rotation for all of the credentials.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nStore the database credentials, API keys, and other secrets in AWS KMS."
          }
      ],
      "explain": "Explanation\n\nAWS Secrets Manager is an AWS service that makes it easier for you to manage secrets. Secrets can be database credentials, passwords, third-party API keys, and even arbitrary text. You can store and control access to these secrets centrally by using the Secrets Manager console, the Secrets Manager command line interface (CLI), or the Secrets Manager API and SDKs.\n\nIn the past, when you created a custom application that retrieves information from a database, you typically had to embed the credentials (the secret) for accessing the database directly in the application. When it came time to rotate the credentials, you had to do much more than just create new credentials. You had to invest time to update the application to use the new credentials. Then you had to distribute the updated application. If you had multiple applications that shared credentials and you missed updating one of them, the application would break. Because of this risk, many customers have chosen not to regularly rotate their credentials, which effectively substitutes one risk for another.\n\n\n\n\n\n\n\nSecrets Manager enables you to replace hardcoded credentials in your code (including passwords), with an API call to Secrets Manager to retrieve the secret programmatically. This helps ensure that the secret can't be compromised by someone examining your code, because the secret simply isn't there. Also, you can configure Secrets Manager to automatically rotate the secret for you according to a schedule that you specify. This enables you to replace long-term secrets with short-term ones, which helps to significantly reduce the risk of compromise.\n\nHence, the most appropriate solution for this scenario is: Use AWS Secrets Manager to store and encrypt the database credentials, API keys, and other secrets. Enable automatic rotation for all of the credentials.\n\nThe option that says: Store the database credentials, API keys, and other secrets to Systems Manager Parameter Store each with a SecureString data type. The credentials are automatically rotated by default is incorrect because Systems Manager Parameter Store doesn't rotate its parameters by default.\n\nThe option that says: Store the database credentials, API keys, and other secrets to AWS ACM is incorrect because it is just a managed private CA service that helps you easily and securely manage the lifecycle of your private certificates to allow SSL communication to your application. This is not a suitable service to store database or any other confidential credentials.\n\nThe option that says: Store the database credentials, API keys, and other secrets in AWS KMS is incorrect because this only makes it easy for you to create and manage encryption keys and control the use of encryption across a wide range of AWS services. This is primarily used for encryption and not for hosting your credentials.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/secrets-manager/\n\nhttps://aws.amazon.com/blogs/security/how-to-securely-provide-database-credentials-to-lambda-functions-by-using-aws-secrets-manager/\n\n\n\n\nCheck out this AWS Secrets Manager Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-secrets-manager/\n\n\n\n\nCheck out this AWS Systems Manager Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-systems-manager/"
  },
  {
      "questionNo": 37,
      "questionText": "You have two On-Demand EC2 instances inside your Virtual Private Cloud in the same Availability Zone but are deployed to different subnets. One EC2 instance is running a database and the other EC2 instance a web application that connects with the database. You want to ensure that these two instances can communicate with each other for your system to work properly.\n\nWhat are the things you have to check so that these EC2 instances can communicate inside the VPC? (Select TWO.)",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nCheck if the default route is set to a NAT instance or Internet Gateway (IGW) for them to communicate."
          },
          {
              "isCorrect": true,
              "text": "​\nCheck the Network ACL if it allows communication between the two subnets.\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\nCheck if all security groups are set to allow the application host to communicate to the database on the right port and protocol.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nEnsure that the EC2 instances are in the same Placement Group."
          },
          {
              "isCorrect": false,
              "text": "​\nCheck if both instances are the same instance class."
          }
      ],
      "explain": "Explanation\n\nFirst, the Network ACL should be properly set to allow communication between the two subnets. The security group should also be properly configured so that your web server can communicate with the database server. Hence, these are the correct answers:\n\nCheck if all security groups are set to allow the application host to communicate to the database on the right port and protocol.\n\nCheck the Network ACL if it allows communication between the two subnets.\n\n\n\n\nThe option that says: Check if both instances are the same instance class is incorrect because the EC2 instances do not need to be of the same class in order to communicate with each other.\n\nThe option that says: Check if the default route is set to a NAT instance or Internet Gateway (IGW) for them to communicate is incorrect because an Internet gateway is primarily used to communicate to the Internet.\n\nThe option that says: Ensure that the EC2 instances are in the same Placement Group is incorrect because Placement Group is mainly used to provide low-latency network performance necessary for tightly-coupled node-to-node communication.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/"
  },
  {
      "questionNo": 38,
      "questionText": "A corporate and investment bank has recently decided to adopt a hybrid cloud architecture for their Trade Finance web application which uses an Oracle database with Oracle Real Application Clusters (RAC) configuration. Since Oracle RAC is not supported in RDS, they decided to launch their database in a large On-Demand EC2 instance instead, with multiple EBS Volumes attached. As a Solutions Architect, you are responsible to ensure the security, availability, scalability, and disaster recovery of the whole architecture.\n\nIn this scenario, which of the following will enable you to take backups of your EBS volumes that are being used by the Oracle database?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nEBS-backed EC2 instances."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Disk Mirroring, which is also known as RAID 1, that replicates data to two or more disks/EBS Volumes."
          },
          {
              "isCorrect": true,
              "text": "​\n\nCreate snapshots of the EBS Volumes.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nLaunch the EBS Volumes to a Placement Group which will automatically back up your data."
          }
      ],
      "explain": "Explanation\n\nCreating snapshots of the EBS Volumes is correct. You can back up the data on your Amazon EBS volumes to Amazon S3 by taking point-in-time snapshots. Snapshots are incremental backups, which means that only the blocks on the device that have changed after your most recent snapshot are saved.\n\n\n\n\n\n\n\nThis minimizes the time required to create the snapshot and saves on storage costs by not duplicating data. When you delete a snapshot, only the data unique to that snapshot is removed. Each snapshot contains all of the information needed to restore your data (from the moment the snapshot was taken) to a new EBS volume.\n\nEBS-backed EC2 instances is incorrect since running an EBS-backed EC2 instance does not relate to your problem as you are already running a few of them in the first place.\n\nUsing Disk Mirroring, which is also known as RAID 1, that replicates data to two or more disks/EBS Volumes is incorrect. Disk mirroring is not an efficient and cost-optimized solution for your problem. You should use EBS snapshots instead.\n\nLaunching the EBS Volumes to a Placement Group which will automatically back up your data is incorrect. A placement group is a logical grouping of instances within a single Availability Zone (AZ) that allows low-latency communication between instances. Hence, this is not an efficient way to back up data.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n\n\n\n\nCheck out this Amazon EBS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-ebs/"
  },
  {
      "questionNo": 39,
      "questionText": "A company has a requirement to move 80 TB data warehouse to the cloud. It would take 2 months to transfer the data given their current bandwidth allocation.\n\nWhich is the most cost-effective service that would allow you to quickly upload their data into AWS?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nAWS Snowmobile"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAWS Direct Connect"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAmazon S3 Multipart Upload"
          },
          {
              "isCorrect": true,
              "text": "​\n\nAWS Snowball Edge\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAWS Snowball Edge is a type of Snowball device with on-board storage and compute power for select AWS capabilities. Snowball Edge can undertake local processing and edge-computing workloads in addition to transferring data between your local environment and the AWS Cloud.\n\nEach Snowball Edge device can transport data at speeds faster than the internet. This transport is done by shipping the data in the appliances through a regional carrier. The appliances are rugged shipping containers, complete with E Ink shipping labels. The AWS Snowball Edge device differs from the standard Snowball because it can bring the power of the AWS Cloud to your on-premises location, with local storage and compute functionality.\n\nSnowball Edge devices have three options for device configurations – storage optimized, compute optimized, and with GPU.\n\nHence, the correct answer is: AWS Snowball Edge.\n\nAWS Snowmobile is incorrect because this is an Exabyte-scale data transfer service used to move extremely large amounts of data to AWS. It is not suitable for transferring a small amount of data, like 80 TB in this scenario. You can transfer up to 100PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. A more cost-effective solution here is to order a Snowball Edge device instead.\n\nAWS Direct Connect is incorrect because it is primarily used to establish a dedicated network connection from your premises network to AWS. This is not suitable for one-time data transfer tasks, like what is depicted in the scenario.\n\nAmazon S3 Multipart Upload is incorrect because this feature simply enables you to upload large objects in multiple parts. It still uses the same Internet connection of the company, which means that the transfer will still take time due to its current bandwidth allocation.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html\n\nhttps://docs.aws.amazon.com/snowball/latest/ug/device-differences.html\n\n\n\n\nCheck out this AWS Snowball Edge Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-snowball-edge/\n\n\n\n\nHere is a quick introduction on AWS Snowball Edge:\n\nhttps://youtu.be/bxSD1Nha2k8\n\n\n\n\nUsing AWS Snowball Edge and AWS DMS for Database Migration:\n\nhttps://youtu.be/6Hw--HE8ILg"
  },
  {
      "questionNo": 40,
      "questionText": "A web application, which is used by your clients around the world, is hosted in an Auto Scaling group of EC2 instances behind a Classic Load Balancer. You need to secure your application by allowing multiple domains to serve SSL traffic over the same IP address.\n\nWhich of the following should you do to meet the above requirement?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nUse an Elastic IP and upload multiple 3rd party certificates in your Classic Load Balancer using the AWS Certificate Manager."
          },
          {
              "isCorrect": true,
              "text": "​\n\nGenerate an SSL certificate with AWS Certificate Manager and create a CloudFront web distribution. Associate the certificate with your web distribution and enable the support for Server Name Indication (SNI).\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Server Name Indication (SNI) on your Classic Load Balancer by adding multiple SSL certificates to allow multiple domains to serve SSL traffic."
          },
          {
              "isCorrect": false,
              "text": "​\n\nIt is not possible to allow multiple domains to serve SSL traffic over the same IP address in AWS"
          }
      ],
      "explain": "Explanation\n\nSNI Custom SSL relies on the SNI extension of the Transport Layer Security protocol, which allows multiple domains to serve SSL traffic over the same IP address by including the hostname which the viewers are trying to connect to.\n\nAmazon CloudFront delivers your content from each edge location and offers the same security as the Dedicated IP Custom SSL feature. SNI Custom SSL works with most modern browsers, including Chrome version 6 and later (running on Windows XP and later or OS X 10.5.7 and later), Safari version 3 and later (running on Windows Vista and later or Mac OS X 10.5.6. and later), Firefox 2.0 and later, and Internet Explorer 7 and later (running on Windows Vista and later).\n\n\n\n\n\n\n\n\n\n\nSome users may not be able to access your content because some older browsers do not support SNI and will not be able to establish a connection with CloudFront to load the HTTPS version of your content. If you need to support non-SNI compliant browsers for HTTPS content, it is recommended to use the Dedicated IP Custom SSL feature.\n\nUsing Server Name Indication (SNI) on your Classic Load Balancer by adding multiple SSL certificates to allow multiple domains to serve SSL traffic is incorrect because a Classic Load Balancer does not support Server Name Indication (SNI). You have to use an Application Load Balancer instead or a CloudFront web distribution to allow the SNI feature.\n\nUsing an Elastic IP and uploading multiple 3rd party certificates in your Classic Load Balancer using the AWS Certificate Manager is incorrect because just like in the above, a Classic Load Balancer does not support Server Name Indication (SNI) and the use of an Elastic IP is not a suitable solution to allow multiple domains to serve SSL traffic. You have to use Server Name Indication (SNI).\n\nThe option that says: It is not possible to allow multiple domains to serve SSL traffic over the same IP address in AWS is incorrect because AWS does support the use of Server Name Indication (SNI).\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/about-aws/whats-new/2014/03/05/amazon-cloudront-announces-sni-custom-ssl/\n\nhttps://aws.amazon.com/blogs/security/how-to-help-achieve-mobile-app-transport-security-compliance-by-using-amazon-cloudfront-and-aws-certificate-manager/\n\n\n\n\nCheck out this Amazon CloudFront Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudfront/\n\n\n\n\nSNI Custom SSL vs Dedicated IP Custom SSL:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-sni-custom-ssl-vs-dedicated-ip-custom-ssl/"
  },
  {
      "questionNo": 41,
      "questionText": "You are working for a commercial bank as an AWS Infrastructure Engineer handling the forex trading application of the bank. You have an Auto Scaling group of EC2 instances that allow your company to cope up with the current demand of traffic and achieve cost-efficiency. You want the Auto Scaling group to behave in such a way that it will follow a predefined set of parameters before it scales down the number of EC2 instances, which protects your system from unintended slowdown or unavailability.   \n\nWhich of the following statements are true regarding the cooldown period? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nIts default value is 300 seconds.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nIt ensures that before the Auto Scaling group scales out, the EC2 instances have an ample time to cooldown."
          },
          {
              "isCorrect": false,
              "text": "​\nIt ensures that the Auto Scaling group launches or terminates additional EC2 instances without any downtime."
          },
          {
              "isCorrect": false,
              "text": "​\nIts default value is 600 seconds."
          },
          {
              "isCorrect": true,
              "text": "​\nIt ensures that the Auto Scaling group does not launch or terminate additional EC2 instances before the previous scaling activity takes effect.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nIn Auto Scaling, the following statements are correct regarding the cooldown period:\n\nIt ensures that the Auto Scaling group does not launch or terminate additional EC2 instances before the previous scaling activity takes effect.\n\nIts default value is 300 seconds.\n\nIt is a configurable setting for your Auto Scaling group.\n\nThe following options are incorrect:\n\n- It ensures that before the Auto Scaling group scales out, the EC2 instances have an ample time to cooldown.\n\n- It ensures that the Auto Scaling group launches or terminates additional EC2 instances without any downtime.\n\n- Its default value is 600 seconds.\n\nThese statements are inaccurate and don't depict what the word \"cooldown\" actually means for Auto Scaling. The cooldown period is a configurable setting for your Auto Scaling group that helps to ensure that it doesn't launch or terminate additional instances before the previous scaling activity takes effect. After the Auto Scaling group dynamically scales using a simple scaling policy, it waits for the cooldown period to complete before resuming scaling activities.\n\nThe figure below demonstrates the scaling cooldown:\n\nReference:\n\nhttp://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-termination.html\n\n\n\n\nCheck out this AWS Auto Scaling Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-auto-scaling/"
  },
  {
      "questionNo": 42,
      "questionText": "You have a new, dynamic web app written in MEAN stack that is going to be launched in the next month. There is a probability that the traffic will be quite high in the first couple of weeks. In the event of a load failure, how can you set up DNS failover to a static website?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nAdd more servers in case the application fails."
          },
          {
              "isCorrect": true,
              "text": "​\n\nUse Route 53 with the failover option to a static S3 website bucket or CloudFront distribution.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nEnable failover to an application hosted in an on-premises data center."
          },
          {
              "isCorrect": false,
              "text": "​\nDuplicate the exact application architecture in another region and configure DNS weight-based routing."
          }
      ],
      "explain": "Explanation\n\nFor this scenario, using Route 53 with the failover option to a static S3 website bucket or CloudFront distribution is correct. You can create a new Route 53 with the failover option to a static S3 website bucket or CloudFront distribution as an alternative.\n\n\n\n\n\n\n\nDuplicating the exact application architecture in another region and configuring DNS weight-based routing is incorrect because running a duplicate system is not a cost-effective solution. Remember that you are trying to build a failover mechanism for your web app, not a distributed setup.\n\nEnabling failover to an application hosted in an on-premises data center is incorrect because, although you can set up failover to your on-premises data center, you are not maximizing the AWS environment such as using Route 53 failover.\n\nAdding more servers in case the application fails is incorrect because this is not the best way to handle a failover event. If you add more servers only in case the application fails, then there would be a period of downtime in which your application is unavailable. Since there are no running servers on that period, your application will be unavailable for a certain period of time until your new server is up and running.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/fail-over-s3-r53/\n\nhttp://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html\n\n\n\n\nCheck out this Amazon Route 53 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-route-53/"
  },
  {
      "questionNo": 43,
      "questionText": "Your company has a top priority requirement to monitor a few database metrics and then afterwards, send email notifications to the Operations team in case there is an issue. Which AWS services can accomplish this requirement? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nAmazon Simple Notification Service (SNS)\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nAmazon Simple Queue Service (SQS)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAmazon EC2 Instance with a running Berkeley Internet Name Domain (BIND) Server."
          },
          {
              "isCorrect": false,
              "text": "​\nAmazon Simple Email Service"
          },
          {
              "isCorrect": true,
              "text": "​\nAmazon CloudWatch\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAmazon CloudWatch and Amazon Simple Notification Service (SNS) are correct. In this requirement, you can use Amazon CloudWatch to monitor the database and then Amazon SNS to send the emails to the Operations team. Take note that you should use SNS instead of SES (Simple Email Service) when you want to monitor your EC2 instances.\n\n\n\n\n\n\n\nCloudWatch collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications, and services that run on AWS, and on-premises servers.\n\nSNS is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.\n\nAmazon Simple Email Service is incorrect. SES is a cloud-based email sending service designed to send notification and transactional emails.\n\nAmazon Simple Queue Service (SQS) is incorrect. SQS is a fully-managed message queuing service. It does not monitor applications nor send email notifications unlike SES.\n\nAmazon EC2 Instance with a running Berkeley Internet Name Domain (BIND) Server is incorrect because BIND is primarily used as a Domain Name System (DNS) web service. This is only applicable if you have a private hosted zone in your AWS account. It does not monitor applications nor send email notifications.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/cloudwatch/\n\nhttps://aws.amazon.com/sns/\n\n\n\n\nCheck out this Amazon CloudWatch Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-cloudwatch/"
  },
  {
      "questionNo": 44,
      "questionText": "A company is hosting its web application in an Auto Scaling group of EC2 instances behind an Application Load Balancer. Recently, the Solutions Architect identified a series of SQL injection attempts and cross-site scripting attacks to the application, which had adversely affected their production data.\n\nWhich of the following should the Architect implement to mitigate this kind of attack?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nUsing AWS Firewall Manager, set up security rules that block SQL injection and cross-site scripting attacks. Associate the rules to the Application Load Balancer."
          },
          {
              "isCorrect": true,
              "text": "​\n\nSet up security rules that block SQL injection and cross-site scripting attacks in AWS Web Application Firewall (WAF). Associate the rules to the Application Load Balancer.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nBlock all the IP addresses where the SQL injection and cross-site scripting attacks originated using the Network Access Control List."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse Amazon Guard​Duty to prevent any further SQL injection and cross-site scripting attacks in your application."
          }
      ],
      "explain": "Explanation\n\nAWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to an Amazon API Gateway API, Amazon CloudFront or an Application Load Balancer. AWS WAF also lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, API Gateway, CloudFront or an Application Load Balancer responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You also can configure CloudFront to return a custom error page when a request is blocked.\n\n\n\n\n\n\n\nAt the simplest level, AWS WAF lets you choose one of the following behaviors:\n\nAllow all requests except the ones that you specify – This is useful when you want CloudFront or an Application Load Balancer to serve content for a public website, but you also want to block requests from attackers.\n\nBlock all requests except the ones that you specify – This is useful when you want to serve content for a restricted website whose users are readily identifiable by properties in web requests, such as the IP addresses that they use to browse to the website.\n\nCount the requests that match the properties that you specify – When you want to allow or block requests based on new properties in web requests, you first can configure AWS WAF to count the requests that match those properties without allowing or blocking those requests. This lets you confirm that you didn't accidentally configure AWS WAF to block all the traffic to your website. When you're confident that you specified the correct properties, you can change the behavior to allow or block requests.\n\nHence, the correct answer in this scenario is: Set up security rules that block SQL injection and cross-site scripting attacks in AWS Web Application Firewall (WAF). Associate the rules to the Application Load Balancer.\n\nUsing Amazon Guard​Duty to prevent any further SQL injection and cross-site scripting attacks in your application is incorrect because Amazon Guard​Duty is just a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads.\n\nUsing AWS Firewall Manager to set up security rules that block SQL injection and cross-site scripting attacks, then associating the rules to the Application Load Balancer is incorrect because the AWS Firewall Manager just simplifies your AWS WAF and AWS Shield Advanced administration and maintenance tasks across multiple accounts and resources.\n\nBlocking all the IP addresses where the SQL injection and cross-site scripting attacks originated using the Network Access Control List is incorrect because this is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. NACLs are not effective in blocking SQL injection and cross-site scripting attacks\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/waf/\n\nhttps://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html\n\n\n\n\nCheck out this AWS WAF Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-waf/"
  },
  {
      "questionNo": 45,
      "questionText": "A media company is setting up an ECS batch architecture for its image processing application. It will be hosted in an Amazon ECS Cluster with two ECS tasks that will handle image uploads from the users and image processing. The first ECS task will process the user requests, store the image in an S3 input bucket, and push a message to a queue. The second task reads from the queue, parses the message containing the object name, and then downloads the object. Once the image is processed and transformed, it will upload the objects to the S3 output bucket. To complete the architecture, the Solutions Architect must create a queue and the necessary IAM permissions for the ECS tasks.\n\nWhich of the following should the Architect do next?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nLaunch a new Amazon MQ queue and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and Amazon MQ queue. Set the (EnableTaskIAMRole) option to true in the task definition."
          },
          {
              "isCorrect": true,
              "text": "​\n\nLaunch a new Amazon SQS queue and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and SQS queue. Declare the IAM Role (taskRoleArn) in the task definition.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nLaunch a new Amazon AppStream 2.0 queue and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and AppStream 2.0 queue. Declare the IAM Role (taskRoleArn) in the task definition."
          },
          {
              "isCorrect": false,
              "text": "​\n\nLaunch a new Amazon Kinesis Data Firehose and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and Kinesis Data Firehose. Specify the ARN of the IAM Role in the (taskDefinitionArn) field of the task definition."
          }
      ],
      "explain": "Explanation\n\nDocker containers are particularly suited for batch job workloads. Batch jobs are often short-lived and embarrassingly parallel. You can package your batch processing application into a Docker image so that you can deploy it anywhere, such as in an Amazon ECS task.\n\nAmazon ECS supports batch jobs. You can use Amazon ECS Run Task action to run one or more tasks once. The Run Task action starts the ECS task on an instance that meets the task’s requirements including CPU, memory, and ports.\n\n\n\n\nFor example, you can set up an ECS Batch architecture for an image processing application. You can set up an AWS CloudFormation template that creates an Amazon S3 bucket, an Amazon SQS queue, an Amazon CloudWatch alarm, an ECS cluster, and an ECS task definition. Objects uploaded to the input S3 bucket trigger an event that sends object details to the SQS queue. The ECS task deploys a Docker container that reads from that queue, parses the message containing the object name and then downloads the object. Once transformed it will upload the objects to the S3 output bucket.\n\nBy using the SQS queue as the location for all object details, you can take advantage of its scalability and reliability as the queue will automatically scale based on the incoming messages and message retention can be configured. The ECS Cluster will then be able to scale services up or down based on the number of messages in the queue.\n\nYou have to create an IAM Role that the ECS task assumes in order to get access to the S3 buckets and SQS queue. Note that the permissions of the IAM role don't specify the S3 bucket ARN for the incoming bucket. This is to avoid a circular dependency issue in the CloudFormation template. You should always make sure to assign the least amount of privileges needed to an IAM role.\n\nHence, the correct answer is: Launch a new Amazon SQS queue and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and SQS queue. Declare the IAM Role (taskRoleArn) in the task definition.\n\nThe option that says: Launch a new Amazon AppStream 2.0 queue and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and AppStream 2.0 queue. Declare the IAM Role (taskRoleArn) in the task definition is incorrect because Amazon AppStream 2.0 is a fully managed application streaming service and can't be used as a queue. You have to use Amazon SQS instead.\n\nThe option that says: Launch a new Amazon Kinesis Data Firehose and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and Kinesis Data Firehose. Specify the ARN of the IAM Role in the (taskDefinitionArn) field of the task definition is incorrect because Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data. Although it can stream data to an S3 bucket, it is not suitable to be used as a queue for a batch application in this scenario. In addition, the ARN of the IAM Role should be declared in the taskRoleArn and not in the taskDefinitionArn field.\n\nThe option that says: Launch a new Amazon MQ queue and configure the second ECS task to read from it. Create an IAM role that the ECS tasks can assume in order to get access to the S3 buckets and Amazon MQ queue. Set the (EnableTaskIAMRole) option to true in the task definition is incorrect because Amazon MQ is primarily used as a managed message broker service and not a queue. The EnableTaskIAMRole option is only applicable for Windows-based ECS Tasks that require extra configuration.\n\n\n\n\nReferences:\n\nhttps://github.com/aws-samples/ecs-refarch-batch-processing\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/common_use_cases.html\n\nhttps://aws.amazon.com/ecs/faqs/"
  },
  {
      "questionNo": 46,
      "questionText": "You are working as a Cloud Consultant for a government agency with a mandate of improving traffic planning, maintenance of roadways and preventing accidents. There is a need to manage traffic infrastructure in real time, alert traffic engineers and emergency response teams when problems are detected, and automatically change traffic signals to get emergency personnel to accident scenes faster by using sensors and smart devices.   \n\nWhich AWS service will allow the developers of the agency to connect the said devices to your cloud-based applications?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nContainer service"
          },
          {
              "isCorrect": true,
              "text": "​\nAWS IoT Core\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nElastic Beanstalk"
          },
          {
              "isCorrect": false,
              "text": "​\nCloudFormation"
          }
      ],
      "explain": "Explanation\n\nAWS IoT Core is a managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices. AWS IoT Core provides secure communication and data processing across different kinds of connected devices and locations so you can easily build IoT applications.\n\n\n\n\n\n\n\nCloudFormation is incorrect because this is mainly used for creating and managing the architecture and not for handling connected devices. You have to use AWS IoT Core instead.\n\nElastic Beanstalk is incorrect because this is mainly used as a substitute to Infrastructure-as-a-Service with Platform-as-a-Service, which reduces management complexity without restricting choice or control and not for handling connected devices.\n\nContainer service is incorrect because this is mainly used for creating and managing docker instances and not for handling devices.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/iot-core/\n\nhttps://aws.amazon.com/iot/"
  },
  {
      "questionNo": 47,
      "questionText": "You work for a leading university as an AWS Infrastructure Engineer and also as a professor to aspiring AWS architects. As a way to familiarize your students with AWS, you gave them a project to host their applications to an EC2 instance. One of your students created an instance to host their online enrollment system project but is having a hard time connecting to their newly created EC2 instance. Your students have explored all of the troubleshooting guides by AWS and narrowed it down to login issues.   \n\nWhich of the following can you use to log into an EC2 instance?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nCustom EC2 password"
          },
          {
              "isCorrect": true,
              "text": "​\nKey Pairs\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nAccess Keys"
          },
          {
              "isCorrect": false,
              "text": "​\nEC2 Connection Strings"
          }
      ],
      "explain": "Explanation\n\nAmazon EC2 uses public–key cryptography to encrypt and decrypt login information. Public–key cryptography uses a public key to encrypt a piece of data, such as a password, then the recipient uses the private key to decrypt the data. The public and private keys are known as a key pair.\n\nTo log in to your instance, you must create a key pair, specify the name of the key pair when you launch the instance, and provide the private key when you connect to the instance. On a Linux instance, the public key content is placed in an entry within ~/.ssh/authorized_keys. This is done at boot time and enables you to securely access your instance using the private key instead of a password.\n\nCustom EC2 password and EC2 Connection Strings are incorrect as both do not exist.\n\nAccess Keys is incorrect as these are used for API calls and not for logging in to EC2.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/"
  },
  {
      "questionNo": 48,
      "questionText": "You have built a web application that checks for new items in an S3 bucket once every hour. If new items exist, a message is added to an SQS queue. You have a fleet of EC2 instances which retrieve messages from the SQS queue, process the file, and finally, send you and the user an email confirmation that the item has been successfully processed. Your officemate uploaded one test file to the S3 bucket and after a couple of hours, you noticed that you and your officemate have 50 emails from your application with the same message.\n\nWhich of the following is most likely the root cause why the application has sent you and the user multiple emails?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nThere is a bug in the application."
          },
          {
              "isCorrect": false,
              "text": "​\nBy default, SQS automatically deletes the messages that were processed by the consumers. It might be possible that your officemate has submitted the request 50 times which is why you received a lot of emails."
          },
          {
              "isCorrect": false,
              "text": "​\nThe sqsSendEmailMessage attribute of the SQS queue is configured to 50."
          },
          {
              "isCorrect": true,
              "text": "​\nYour application does not issue a delete command to the SQS queue after processing the message, which is why this message went back to the queue and was processed multiple times.\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nIn this scenario, the main culprit is that your application does not issue a delete command to the SQS queue after processing the message, which is why this message went back to the queue and was processed multiple times.\n\nThe option that says: The sqsSendEmailMessage attribute of the SQS queue is configured to 50 is incorrect as there is no sqsSendEmailMessage attribute in SQS.\n\nThe option that says: There is a bug in the application is a valid answer but since the scenario did not mention that the EC2 instances deleted the processed messages, the most likely cause of the problem is that the application does not issue a delete command to the SQS queue as mentioned above.\n\nThe option that says: By default, SQS automatically deletes the messages that were processed by the consumers. It might be possible that your officemate has submitted the request 50 times which is why you received a lot of emails is incorrect as SQS does not automatically delete the messages.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/sqs/faqs/\n\n\n\n\nCheck out this Amazon SQS Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-sqs/"
  },
  {
      "questionNo": 49,
      "questionText": "As a Network Architect developing a food ordering application, you need to retrieve the instance ID, public keys, and public IP address of the EC2 server you made for tagging and grouping the attributes into your internal application running on-premises.\n\nWhich EC2 feature will help you achieve your requirements?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nInstance metadata\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nResource tags"
          },
          {
              "isCorrect": false,
              "text": "​\nAmazon Machine Image"
          },
          {
              "isCorrect": false,
              "text": "​\nInstance user data"
          }
      ],
      "explain": "Explanation\n\nInstance metadata is the data about your instance that you can use to configure or manage the running instance. You can get the instance ID, public keys, public IP address and many other information from the instance metadata by firing a URL command in your instance to this URL:\n\nhttp://169.254.169.254/latest/meta-data/\n\n\n\n\n\n\n\nInstance user data is incorrect because this is mainly used to perform common automated configuration tasks and run scripts after the instance starts.\n\nResource tags is incorrect because these are labels that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define.\n\nAmazon Machine Image is incorrect because this mainly provides the information required to launch an instance, which is a virtual server in the cloud.\n\n\n\n\nReference:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.htm\n\n\n\n\nCheck out this Amazon EC2 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-elastic-compute-cloud-amazon-ec2/"
  },
  {
      "questionNo": 50,
      "questionText": "You are a Solutions Architect working with a company that uses Chef Configuration management in their datacenter. Which service is designed to let the customer leverage existing Chef recipes in AWS?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nAWS CloudFormation"
          },
          {
              "isCorrect": true,
              "text": "​\nAWS OpsWorks\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nAmazon Simple Workflow Service"
          },
          {
              "isCorrect": false,
              "text": "​\nAWS Elastic Beanstalk"
          }
      ],
      "explain": "Explanation\n\nAWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments. OpsWorks has three offerings - AWS Opsworks for Chef Automate, AWS OpsWorks for Puppet Enterprise, and AWS OpsWorks Stacks.\n\n\n\n\n\n\n\nAmazon Simple Workflow Service is incorrect because AWS SWF is a fully-managed state tracker and task coordinator in the Cloud. It does not let you leverage Chef recipes.\n\nAWS Elastic Beanstalk is incorrect because this handles an application's deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring. It does not let you leverage Chef recipes just like Amazon SWF.\n\nAWS CloudFormation is incorrect because this is a service that lets you create a collection of related AWS resources and provision them in a predictable fashion using infrastructure as code. It does not let you leverage Chef recipes just like Amazon SWF and AWS Elastic Beanstalk.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/opsworks/\n\n\n\n\nCheck out this AWS OpsWorks Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-opsworks/\n\n\n\n\nElastic Beanstalk vs CloudFormation vs OpsWorks vs CodeDeploy:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-elastic-beanstalk-vs-cloudformation-vs-opsworks-vs-codedeploy/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/"
  },
  {
      "questionNo": 51,
      "questionText": "Your company just recently adopted a hybrid architecture that integrates their on-premises data center to their AWS cloud. You are assigned to configure the VPC as well as to implement the required IAM users, IAM roles, IAM groups and IAM policies.\n\nIn this scenario, what is a best practice when creating IAM policies?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nGrant all permissions to any EC2 user."
          },
          {
              "isCorrect": true,
              "text": "​\nUse the principle of least privilege which means granting only the permissions required to perform a task.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nDetermine what users need to do and then craft policies for them that let the users perform those tasks including additional administrative operations."
          },
          {
              "isCorrect": false,
              "text": "​\nUse the principle of least privilege which means granting only the least number of people with full root access."
          }
      ],
      "explain": "Explanation\n\nOne of the best practices in Amazon IAM is to grant least privilege.\n\nWhen you create IAM policies, follow the standard security advice of granting least privilege—that is, granting only the permissions required to perform a task. Determine what users need to do and then craft policies for them that let the users perform only those tasks. Therefore, using the principle of least privilege which means granting only the permissions required to perform a task is the correct answer.\n\nStart with a minimum set of permissions and grant additional permissions as necessary.\n\nDefining the right set of permissions requires some understanding of the user's objectives. Determine what is required for the specific task, what actions a particular service supports, and what permissions are required in order to perform those actions.\n\nGranting all permissions to any EC2 user is incorrect since you don't want your users to gain access to everything and perform unnecessary actions. Doing so is not a good security practice.\n\nUsing the principle of least privilege which means granting only the least number of people with full root access is incorrect because this is not the correct definition of what the principle of least privilege is.\n\nDetermining what users need to do and then craft policies for them that let the users perform those tasks including additional administrative operations is incorrect as well since there are some users who you should not give administrative access to. You should follow the principle of least privilege when providing permissions and accesses to your resources.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-groups-for-permissions\n\n\n\n\nCheck out this AWS IAM Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-identity-and-access-management-iam/\n\n\n\n\nService Control Policies (SCP) vs IAM Policies:\n\nhttps://tutorialsdojo.com/service-control-policies-scp-vs-iam-policies/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/"
  },
  {
      "questionNo": 52,
      "questionText": "A startup company has a serverless architecture that uses AWS Lambda, API Gateway, and DynamoDB. They received an urgent feature request from their client last month and now, it is ready to be pushed to production. The company is using AWS CodeDeploy as their deployment service.\n\nWhich of the following configuration types will allow you to specify the percentage of traffic shifted to your updated Lambda function version before the remaining traffic is shifted in the second increment?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nCanary\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nBlue/Green"
          },
          {
              "isCorrect": false,
              "text": "​\n\nLinear"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAll-at-once"
          }
      ],
      "explain": "Explanation\n\nIf you're using the AWS Lambda compute platform, you must choose one of the following deployment configuration types to specify how traffic is shifted from the original AWS Lambda function version to the new AWS Lambda function version:\n\nCanary: Traffic is shifted in two increments. You can choose from predefined canary options that specify the percentage of traffic shifted to your updated Lambda function version in the first increment and the interval, in minutes, before the remaining traffic is shifted in the second increment.\n\nLinear: Traffic is shifted in equal increments with an equal number of minutes between each increment. You can choose from predefined linear options that specify the percentage of traffic shifted in each increment and the number of minutes between each increment.\n\nAll-at-once: All traffic is shifted from the original Lambda function to the updated Lambda function version at once.\n\nBlue/Green is incorrect because this is not a predefined deployment type configuration for an AWS Lambda Compute Platform. You can only choose Canary, Linear, and All-at-once.\n\nLinear is incorrect because this type of deployment shifts the traffic in equal increments with an equal number of minutes between each increment. You can't specify the percentage of traffic shifted to your updated Lambda function version before the remaining traffic is shifted in the second increment, unlike Canary.\n\nAll-at-once is incorrect because there are no increments for this type of deployment. All traffic is shifted from the original Lambda function to the updated Lambda function version at once.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html#blue-green-lambda-compute-type\n\nhttps://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html#deployment-configurations-predefined-lambda\n\n\n\n\nCheck out these AWS Lambda and CodeDeploy Cheat Sheets:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-lambda/\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-codedeploy/"
  },
  {
      "questionNo": 53,
      "questionText": "An accounting application uses an RDS database configured with Multi-AZ deployments to improve availability. What would happen to RDS if the primary database instance fails?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nThe primary database instance will reboot."
          },
          {
              "isCorrect": false,
              "text": "​\nA new database instance is created in the standby Availability Zone."
          },
          {
              "isCorrect": true,
              "text": "​\nThe canonical name record (CNAME) is switched from the primary to standby instance.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nThe IP address of the primary DB instance is switched to the standby DB instance."
          }
      ],
      "explain": "Explanation\n\nIn Amazon RDS, failover is automatically handled so that you can resume database operations as quickly as possible without administrative intervention in the event that your primary database instance went down. When failing over, Amazon RDS simply flips the canonical name record (CNAME) for your DB instance to point at the standby, which is in turn promoted to become the new primary.\n\nThe option that says: The IP address of the primary DB instance is switched to the standby DB instance is incorrect since IP addresses are per subnet, and subnets cannot span multiple AZs.\n\nThe option that says: The primary database instance will reboot is incorrect since in the event of a failure, there is no database to reboot with.\n\nThe option that says: A new database instance is created in the standby Availability Zone is incorrect since with multi-AZ enabled, you already have a standby database in another AZ.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\nhttps://aws.amazon.com/rds/faqs/\n\n\n\n\nCheck out this Amazon RDS Cheat Sheet:\n\nhttps://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/"
  },
  {
      "questionNo": 54,
      "questionText": "You are an IT Consultant for an advertising company that is currently working on a proof of concept project that automatically provides SEO analytics for their clients. Your company has a VPC in AWS that operates in dual-stack mode in which IPv4 and IPv6 communication is allowed. You deployed the application to an Auto Scaling group of EC2 instances with an Application Load Balancer in front that evenly distributes the incoming traffic. You are ready to go live but you need to point your domain name (tutorialsdojo.com) to the Application Load Balancer.   \n\nIn Route 53, which record types will you use to point the DNS name of the Application Load Balancer? (Select TWO.)",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nNon-Alias with a type \"A\" record set"
          },
          {
              "isCorrect": true,
              "text": "​\n\nAlias with a type \"AAAA\" record set\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAlias with a type \"CNAME\" record set"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAlias with a type of “MX” record set"
          },
          {
              "isCorrect": true,
              "text": "​\n\nAlias with a type \"A\" record set\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAlias with a type \"AAAA\" record set and Alias with a type \"A\" record set are correct. To route domain traffic to an ELB load balancer, use Amazon Route 53 to create an alias record that points to your load balancer. An alias record is a Route 53 extension to DNS. It's similar to a CNAME record, but you can create an alias record both for the root domain, such as tutorialsdojo.com, and for subdomains, such as portal.tutorialsdojo.com. (You can create CNAME records only for subdomains.) To enable IPv6 resolution, you would need to create a second resource record, tutorialsdojo.com ALIAS AAAA -> myelb.us-west-2.elb.amazonnaws.com, this is assuming your Elastic Load Balancer has IPv6 support.\n\n\n\n\n\n\n\nNon-Alias with a type \"A\" record set is incorrect because you only use Non-Alias with a type “A” record set for IP addresses.\n\nAlias with a type \"CNAME\" record set is incorrect because you can't create a CNAME record at the zone apex. For example, if you register the DNS name tutorialsdojo.com, the zone apex is tutorialsdojo.com.\n\nAlias with a type of “MX” record set is incorrect because an MX record is primarily used for mail servers. It includes a priority number and a domain name, for example: 10 mailserver.tutorialsdojo.com.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html\n\n\n\n\nCheck out this Amazon Route 53 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-route-53/"
  },
  {
      "questionNo": 55,
      "questionText": "A media company hosts large volumes of archive data that are about 250 TB in size on their internal servers. They have decided to move these data to S3 because of its durability and redundancy. The company currently has a 100 Mbps dedicated line connecting their head office to the Internet.\n\nWhich of the following is the FASTEST and the MOST cost-effective way to import all these data to Amazon S3?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nUpload it directly to S3"
          },
          {
              "isCorrect": false,
              "text": "​\n\nEstablish an AWS Direct Connect connection then transfer the data over to S3."
          },
          {
              "isCorrect": false,
              "text": "​\n\nUse AWS Snowmobile to transfer the data over to S3."
          },
          {
              "isCorrect": true,
              "text": "​\n\nOrder multiple AWS Snowball devices to upload the files to Amazon S3.\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud. Using Snowball addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns. Transferring data with Snowball is simple, fast, secure, and can be as little as one-fifth the cost of high-speed Internet.\n\n\n\n\n\n\n\nSnowball is a strong choice for data transfer if you need to more securely and quickly transfer terabytes to many petabytes of data to AWS. Snowball can also be the right choice if you don’t want to make expensive upgrades to your network infrastructure, if you frequently experience large backlogs of data, if you're located in a physically isolated environment, or if you're in an area where high-speed Internet connections are not available or cost-prohibitive.\n\nAs a rule of thumb, if it takes more than one week to upload your data to AWS using the spare capacity of your existing Internet connection, then you should consider using Snowball. For example, if you have a 100 Mb connection that you can solely dedicate to transferring your data and need to transfer 100 TB of data, it takes more than 100 days to complete data transfer over that connection. You can make the same transfer by using multiple Snowballs in about a week.\n\n\n\n\n\n\n\nHence, ordering multiple AWS Snowball devices to upload the files to Amazon S3 is the correct answer.\n\nUploading it directly to S3 is incorrect since this would take too long to finish due to the slow Internet connection of the company.\n\nEstablishing an AWS Direct Connect connection then transferring the data over to S3 is incorrect since provisioning a line for Direct Connect would take too much time and might not give you the fastest data transfer solution. In addition, the scenario didn't warrant an establishment of a dedicated connection from your on-premises data center to AWS. The primary goal is to just do a one-time migration of data to AWS which can be accomplished by using AWS Snowball devices.\n\nUsing AWS Snowmobile to transfer the data over to S3 is incorrect because Snowmobile is more suitable if you need to move extremely large amounts of data to AWS or need to transfer up to 100PB of data. This will be transported on a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. Take note that you only need to migrate 250 TB of data, hence, this is not the most suitable and cost-effective solution.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/snowball/\n\nhttps://aws.amazon.com/snowball/faqs/\n\n\n\n\nCheck out this AWS Snowball Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-snowball/\n\n\n\n\nS3 Transfer Acceleration vs Direct Connect vs VPN vs Snowball vs Snowmobile:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-s3-transfer-acceleration-vs-direct-connect-vs-vpn-vs-snowball-vs-snowmobile/\n\n\n\n\nComparison of AWS Services Cheat Sheets:\n\nhttps://tutorialsdojo.com/comparison-of-aws-services-for-udemy-students/"
  },
  {
      "questionNo": 56,
      "questionText": "Your fellow AWS Engineer has created a new Standard-class S3 bucket to store financial reports that are not frequently accessed but should be immediately available when an auditor requests for it. To save costs, you changed the storage class of the S3 bucket from Standard to Infrequent Access storage class.   \n\nIn Amazon S3 Standard - Infrequent Access storage class, which of the following statements are true? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nIt is designed for data that is accessed less frequently.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nIdeal to use for data archiving."
          },
          {
              "isCorrect": false,
              "text": "​\n\nIt provides high latency and low throughput performance"
          },
          {
              "isCorrect": false,
              "text": "​\n\nIt is the best storage option to store noncritical and reproducible data"
          },
          {
              "isCorrect": true,
              "text": "​\n\nIt is designed for data that requires rapid access when needed.\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAmazon S3 Standard - Infrequent Access (Standard - IA) is an Amazon S3 storage class for data that is accessed less frequently, but requires rapid access when needed. Standard - IA offers the high durability, throughput, and low latency of Amazon S3 Standard, with a low per GB storage price and per GB retrieval fee.\n\nThis combination of low cost and high performance make Standard - IA ideal for long-term storage, backups, and as a data store for disaster recovery. The Standard - IA storage class is set at the object level and can exist in the same bucket as Standard, allowing you to use lifecycle policies to automatically transition objects between storage classes without any application changes.\n\nKey Features:\n\n- Same low latency and high throughput performance of Standard\n\n- Designed for durability of 99.999999999% of objects\n\n- Designed for 99.9% availability over a given year\n\n- Backed with the Amazon S3 Service Level Agreement for availability\n\n- Supports SSL encryption of data in transit and at rest\n\n- Lifecycle management for automatic migration of objects\n\n\n\n\nThe option that says: It is the best storage option to store noncritical and reproducible data is incorrect as it actually refers to Amazon S3 - Reduced Redundancy Storage (RRS). In addition, RRS will be completely deprecated soon and AWS recommends to use S3 IA One-Zone instead.\n\nThe option that says: It provides high latency and low throughput performance is incorrect as it should be \"low latency\" and \"high throughput\" instead. S3 automatically scales performance to meet user demands.\n\nThe option that says: Ideal to use for data archiving is incorrect because this statement refers to Amazon S3 Glacier. Glacier is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup.\n\n\n\n\nReference:\n\nhttps://aws.amazon.com/s3/storage-classes/\n\n\n\n\nCheck out this Amazon S3 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-s3/"
  },
  {
      "questionNo": 57,
      "questionText": "A messaging application in ap-northeast-1 region uses m4.2xlarge instance to accommodate 75 percent of users from Tokyo and Seoul. It uses a cheaper m4.large instance in ap-southeast-1 to accommodate the rest of users from Manila and Singapore.\n\nAs a Solutions Architect, what routing policy should you use to route traffic to your instances based on the location of your users and instances?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nGeoproximity Routing\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nLatency Routing"
          },
          {
              "isCorrect": false,
              "text": "​\n\nWeighted Routing"
          },
          {
              "isCorrect": false,
              "text": "​\n\nGeolocation Routing"
          }
      ],
      "explain": "Explanation\n\nAmazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. You can use Route 53 to perform three main functions in any combination: domain registration, DNS routing, and health checking. After you create a hosted zone for your domain, such as example.com, you create records to tell the Domain Name System (DNS) how you want traffic to be routed for that domain.\n\nFor example, you might create records that cause DNS to do the following:\n\nRoute internet traffic for example.com to the IP address of a host in your data center.\n\nRoute email for that domain (jose.rizal@tutorialsdojo.com) to a mail server (mail.tutorialsdojo.com).\n\nRoute traffic for a subdomain called operations.manila.tutorialsdojo.com to the IP address of a different host.\n\nEach record includes the name of a domain or a subdomain, a record type (for example, a record with a type of MX routes email), and other information applicable to the record type (for MX records, the hostname of one or more mail servers and a priority for each server).\n\nRoute 53 has different routing policies that you can choose from. Below are some of the policies:\n\nLatency Routing lets Amazon Route 53 serve user requests from the AWS Region that provides the lowest latency. It does not, however, guarantee that users in the same geographic region will be served from the same location.\n\nGeoproximity Routing lets Amazon Route 53 route traffic to your resources based on the geographic location of your users and your resources. You can also optionally choose to route more traffic or less to a given resource by specifying a value, known as a bias. A bias expands or shrinks the size of the geographic region from which traffic is routed to a resource.\n\nGeolocation Routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from.\n\nWeighted Routing lets you associate multiple resources with a single domain name (tutorialsdojo.com) or subdomain name (subdomain.tutorialsdojo.com) and choose how much traffic is routed to each resource.\n\nIn the scenario, the problem requires a routing policy that will let Route 53 route traffic to specific instances based on the location of the instances and the users. You need to use Geoproximity Routing and specify a bias to control the size of the geographic region from which traffic is routed to your instance.\n\nHence, the correct answer is Geoproximity Routing.\n\nGeolocation Routing is incorrect because you cannot control the coverage size from which traffic is routed to your instance in Geolocation Routing. It just lets you choose the instances that will serve traffic based on the location of your users.\n\nLatency Routing is incorrect because it is mainly used for improving performance by letting Route 53 serve user requests from the AWS Region that provides the lowest latency.\n\nWeighted Routing is incorrect because it is used for routing traffic to multiple resources in proportions that you specify. This can be useful for load balancing and testing new versions of software.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geoproximity\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/rrsets-working-with.html\n\n\n\n\nLatency Routing vs Geoproximity Routing vs Geolocation Routing:\n\nhttps://tutorialsdojo.com/latency-routing-vs-geoproximity-routing-vs-geolocation-routing/"
  },
  {
      "questionNo": 58,
      "questionText": "A digital media company shares static content to its premium users around the world and also to their partners who syndicate their media files. The company is looking for ways to reduce its server costs and securely deliver their data to their customers globally with low latency.\n\nWhich combination of services should be used to provide the MOST suitable and cost-effective architecture? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nAmazon S3\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAWS Global Accelerator"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAWS Lambda"
          },
          {
              "isCorrect": false,
              "text": "​\n\nAWS Fargate"
          },
          {
              "isCorrect": true,
              "text": "​\n\nAmazon CloudFront\n\n(Correct)"
          }
      ],
      "explain": "Explanation\n\nAmazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.\n\nCloudFront is integrated with AWS – both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services. CloudFront works seamlessly with services including AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and Lambda@Edge to run custom code closer to customers’ users and to customize the user experience. Lastly, if you use AWS origins such as Amazon S3, Amazon EC2 or Elastic Load Balancing, you don’t pay for any data transferred between these services and CloudFront.\n\nAmazon S3 is object storage built to store and retrieve any amount of data from anywhere on the Internet. It’s a simple storage service that offers an extremely durable, highly available, and infinitely scalable data storage infrastructure at very low costs.\n\nAWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.\n\nHence, the correct options are Amazon CloudFront and Amazon S3.\n\nAWS Fargate is incorrect because this service is just a serverless compute engine for containers that work with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS). Although this service is more cost-effective than its server-based counterpart, Amazon S3 still costs way less than Fargate, especially for storing static content.\n\nAWS Lambda is incorrect because this simply lets you run your code serverless, without provisioning or managing servers. Although this is also a cost-effective service since you have to pay only for the compute time you consume, you can't use this to store static content or as a Content Delivery Network (CDN). A better combination is Amazon CloudFront and Amazon S3.\n\nAWS Global Accelerator is incorrect because this service is more suitable for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Moreover, there is no direct way that you can integrate AWS Global Accelerator with Amazon S3. It's more suitable to use Amazon CloudFront instead in this scenario.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/\n\nhttps://aws.amazon.com/blogs/networking-and-content-delivery/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/\n\nhttps://aws.amazon.com/global-accelerator/faqs/"
  },
  {
      "questionNo": 59,
      "questionText": "A start-up company has an EC2 instance that is hosting a web application. The volume of users is expected to grow in the coming months and hence, you need to add more elasticity and scalability in your AWS architecture to cope with the demand. \n\nWhich of the following options can satisfy the above requirement for the given scenario? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nSet up two EC2 instances and then put them behind an Elastic Load balancer (ELB).\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up two EC2 instances deployed using Launch Templates and integrated with AWS Glue."
          },
          {
              "isCorrect": true,
              "text": "​\n\nSet up two EC2 instances and use Route 53 to route traffic based on a Weighted Routing Policy.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up an S3 Cache in front of the EC2 instance."
          },
          {
              "isCorrect": false,
              "text": "​\n\nSet up an AWS WAF behind your EC2 Instance."
          }
      ],
      "explain": "Explanation\n\nUsing an Elastic Load Balancer is an ideal solution for adding elasticity to your application. Alternatively, you can also create a policy in Route 53, such as a Weighted routing policy, to evenly distribute the traffic to 2 or more EC2 instances. Hence, setting up two EC2 instances and then put them behind an Elastic Load balancer (ELB) and setting up two EC2 instances and using Route 53 to route traffic based on a Weighted Routing Policy are the correct answers.\n\n\n\n\n\n\n\nSetting up an S3 Cache in front of the EC2 instance is incorrect because doing so does not provide elasticity and scalability to your EC2 instances.\n\nSetting up an AWS WAF behind your EC2 Instance is incorrect because AWS WAF is a web application firewall that helps protect your web applications from common web exploits. This service is more on providing security to your applications.\n\nSetting up two EC2 instances deployed using Launch Templates and integrated with AWS Glue is incorrect because AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics. It does not provide scalability or elasticity to your instances.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/elasticloadbalancing\n\nhttp://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html\n\n\n\n\nCheck out this AWS Elastic Load Balancing Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-aws-elastic-load-balancing-elb/\n\n\n\n\nCheck out this Amazon Route 53 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-route-53/"
  },
  {
      "questionNo": 60,
      "questionText": "You have a static corporate website hosted in a standard S3 bucket and a new web domain name which was registered using Route 53. You are instructed by your manager to integrate these two services in order to successfully launch their corporate website.\n\nWhat are the prerequisites when routing traffic using Amazon Route 53 to a website that is hosted in an Amazon S3 Bucket? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nA registered domain name\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\nThe S3 bucket name must be the same as the domain name\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nThe S3 bucket must be in the same region as the hosted zone"
          },
          {
              "isCorrect": false,
              "text": "​\nThe record set must be of type \"MX\""
          },
          {
              "isCorrect": false,
              "text": "​\n\nThe Cross-Origin Resource Sharing (CORS) option should be enabled in the S3 bucket"
          }
      ],
      "explain": "Explanation\n\nHere are the prerequisites for routing traffic to a website that is hosted in an Amazon S3 Bucket:\n\n- An S3 bucket that is configured to host a static website. The bucket must have the same name as your domain or subdomain. For example, if you want to use the subdomain portal.tutorialsdojo.com, the name of the bucket must be portal.tutorialsdojo.com.\n\n- A registered domain name. You can use Route 53 as your domain registrar, or you can use a different registrar.\n\n- Route 53 as the DNS service for the domain. If you register your domain name by using Route 53, we automatically configure Route 53 as the DNS service for the domain.\n\n\n\n\n\n\n\nThe option that says: The record set must be of type \"MX\" is incorrect since an MX record specifies the mail server responsible for accepting email messages on behalf of a domain name. This is not what is being asked by the question.\n\nThe option that says: The S3 bucket must be in the same region as the hosted zone is incorrect. There is no constraint that the S3 bucket must be in the same region as the hosted zone, in order for the Route 53 service to route traffic into it.\n\nThe option that says: The Cross-Origin Resource Sharing (CORS) option should be enabled in the S3 bucket is incorrect because you only need to enable Cross-Origin Resource Sharing (CORS) when your client web application on one domain interacts with the resources in a different domain.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html\n\n\n\n\nCheck out this Amazon Route 53 Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-route-53/"
  },
  {
      "questionNo": 61,
      "questionText": "Your company is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage the fleet of Amazon EC2 instances running in both the public and private subnets. You have added a bastion host with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups, but the company wants to further limit administrative access to all of the instances in the VPC.\n\nWhich of the following bastion host deployment options will meet this requirement?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\nDeploy a Windows Bastion host on the corporate network that has RDP access to all EC2 instances in the VPC."
          },
          {
              "isCorrect": false,
              "text": "​\nDeploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere."
          },
          {
              "isCorrect": true,
              "text": "​\nDeploy a Windows Bastion host with an Elastic IP address in the public subnet and allow RDP access to bastion only from the corporate IP addresses.\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\nDeploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses."
          }
      ],
      "explain": "Explanation\n\nThe correct answer is to deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow RDP access to bastion only from the corporate IP addresses.\n\nA bastion host is a special purpose computer on a network specifically designed and configured to withstand attacks. If you have a bastion host in AWS, it is basically just an EC2 instance. It should be in a public subnet with either a public or Elastic IP address with sufficient RDP or SSH access defined in the security group. Users log on to the bastion host via SSH or RDP and then use that session to manage other hosts in the private subnets.\n\n\n\n\n\n\n\nDeploying a Windows Bastion host on the corporate network that has RDP access to all EC2 instances in the VPC is incorrect since you do not deploy the Bastion host to your corporate network. It should be in the public subnet of a VPC.\n\nDeploying a Windows Bastion host with an Elastic IP address in the private subnet, and restricting RDP access to the bastion from only the corporate public IP addresses is incorrect since it should be deployed in a public subnet, not a private subnet.\n\nDeploying a Windows Bastion host with an Elastic IP address in the public subnet and allowing SSH access to the bastion from anywhere is incorrect. Since it is a Windows bastion, you should allow RDP access and not SSH as this is mainly used for Linux-based systems.\n\n\n\n\nReference:\n\nhttps://docs.aws.amazon.com/quickstart/latest/linux-bastion/architecture.html\n\n\n\n\nCheck out this Amazon VPC Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-vpc/"
  },
  {
      "questionNo": 62,
      "questionText": "A website that consists of HTML, CSS, and other client-side Javascript will be hosted on the AWS environment. Several high-resolution images will be displayed on the webpage. The website and the photos should have the optimal loading response times as possible, and should also be able to scale to high request rates.\n\nWhich of the following architectures can provide the most cost-effective and fastest loading experience?",
      "options": [
          {
              "isCorrect": false,
              "text": "​\n\nCreate a Nginx web server in an Amazon LightSail instance to host the HTML, CSS, and Javascript files then enable caching. Upload the images in an S3 bucket. Use CloudFront as a CDN to deliver the images closer to your end-users."
          },
          {
              "isCorrect": false,
              "text": "​\n\nLaunch an Auto Scaling Group using an AMI that has a pre-configured Apache web server, then configure the scaling policy accordingly. Store the images in an Elastic Block Store. Then, point your instance’s endpoint to AWS Global Accelerator."
          },
          {
              "isCorrect": true,
              "text": "​\n\nUpload the HTML, CSS, Javascript, and the images in a single bucket. Then enable website hosting. Create a CloudFront distribution and point the domain on the S3 website endpoint.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nCreate a Nginx web server in an EC2 instance to host the HTML, CSS, and Javascript files then enable caching. Upload the images in an S3 bucket. Use CloudFront as a CDN to deliver the images closer to your end-users."
          }
      ],
      "explain": "Explanation\n\nAmazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. Additionally, You can use Amazon S3 to host a static website. On a static website, individual webpages include static content. Amazon S3 is highly scalable and you only pay for what you use, you can start small and grow your application as you wish, with no compromise on performance or reliability.\n\nAmazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds. CloudFront can be integrated with Amazon S3 for fast delivery of data originating from an S3 bucket to your end-users. By design, delivering data out of CloudFront can be more cost-effective than delivering it from S3 directly to your users.\n\nThe scenario given is about storing and hosting images and a static website respectively. Since we are just dealing with static content, we can leverage the web hosting feature of S3. Then we can improve the architecture further by integrating it with CloudFront. This way, users will be able to load both the web pages and images faster than if we are serving them from a standard webserver.\n\nHence, the correct answer is: Upload the HTML, CSS, Javascript, and the images in a single bucket. Then enable website hosting. Create a CloudFront distribution and point the domain on the S3 website endpoint.\n\nThe option that says: Create an Nginx web server in an EC2 instance to host the HTML, CSS, and Javascript files then enable caching. Upload the images in a S3 bucket. Use CloudFront as a CDN to deliver the images closer to your end-users is incorrect. Creating your own web server just to host a static website in AWS is a costly solution. Web Servers on an EC2 instance is usually used for hosting dynamic web applications. Since static websites contain web pages with fixed content, we should use S3 website hosting instead.\n\nThe option that says: Launch an Auto Scaling Group using an AMI that has a pre-configured Apache web server, then configure the scaling policy accordingly. Store the images in an Elastic Block Store. Then, point your instance’s endpoint to AWS Global Accelerator is incorrect. This is how we serve static websites in the old days. Now, with the help of S3 website hosting, we can host our static contents from a durable, high-availability, and highly scalable environment without managing any servers. Hosting static websites in S3 is cheaper than hosting it in an EC2 instance. In addition, Using ASG for scaling instances that host a static website is an over-engineered solution that carries unnecessary costs. S3 automatically scales to high requests and you only pay for what you use.\n\nThe option that says: Create an Nginx web server in an Amazon LightSail instance to host the HTML, CSS, and Javascript files then enable caching. Upload the images in an S3 bucket. Use CloudFront as a CDN to deliver the images closer to your end-users is incorrect because although LightSail is cheaper than EC2, creating your own LightSail web server for hosting static websites is still a relatively expensive solution when compared to hosting it on S3. In addition, S3 automatically scales to high request rates.\n\n\n\n\nReferences:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\n\nhttps://aws.amazon.com/blogs/networking-and-content-delivery/amazon-s3-amazon-cloudfront-a-match-made-in-the-cloud/\n\n\n\n\nCheck out these Amazon S3 and CloudFront Cheat Sheets:\n\nhttps://tutorialsdojo.com/amazon-s3/\n\nhttps://tutorialsdojo.com/amazon-cloudfront/"
  },
  {
      "questionNo": 63,
      "questionText": "You are working for a University as their AWS Consultant. They want to have a disaster recovery strategy in AWS for mission-critical applications after suffering a disastrous outage wherein they lost student and employee records. They don't want this to happen again but at the same time want to minimize the monthly costs. You are instructed to set up a minimal version of the application that is always available in case of any outages. The DR site should only run the most critical core elements of your system in AWS to save cost which can be rapidly upgraded to a full-scale production environment in the event of system outages.\n\nWhich of the following disaster recovery architectures is the most cost-effective type to use in this scenario?",
      "options": [
          {
              "isCorrect": true,
              "text": "​\nPilot Light\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nWarm Standby"
          },
          {
              "isCorrect": false,
              "text": "​\n\nBackup & Restore"
          },
          {
              "isCorrect": false,
              "text": "​\n\nMulti Site"
          }
      ],
      "explain": "Explanation\n\nThe correct answer is Pilot Light.\n\nThe term pilot light is often used to describe a DR scenario in which a minimal version of an environment is always running in the cloud. The idea of the pilot light is an analogy that comes from the gas heater. In a gas heater, a small flame that’s always on can quickly ignite the entire furnace to heat up a house. This scenario is similar to a backup-and-restore scenario.\n\nFor example, with AWS you can maintain a pilot light by configuring and running the most critical core elements of your system in AWS. When the time comes for recovery, you can rapidly provision a full-scale production environment around the critical core.\n\n\n\n\n\n\n\nBackup & Restore is incorrect because you are running mission-critical applications, and the speed of recovery from backup and restore solution might not meet your RTO and RPO.\n\nWarm Standby is incorrect. Warm standby is a method of redundancy in which the scaled-down secondary system runs in the background of the primary system. Doing so would not optimize your savings as much as running a pilot light recovery since some of your services are always running in the background.\n\nMulti Site is incorrect as well. Multi-site is the most expensive solution out of disaster recovery solutions. You are trying to save monthly costs so this should be the least probable choice for you.\n\n\n\n\nReferences:\n\nhttps://www.slideshare.net/AmazonWebServices/disaster-recovery-options-with-aws\n\n\n\n\nBackup and Restore vs Pilot Light vs Warm Standby vs Multi-site:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-backup-and-restore-vs-pilot-light-vs-warm-standby-vs-multi-site/\n\n\n\n\nRPO and RTO Explained:\n\nhttps://youtu.be/rD3nBaS3OG4"
  },
  {
      "questionNo": 64,
      "questionText": "You are a Solutions Architect of a multi-national gaming company which develops video games for PS4, Xbox One and Nintendo Switch consoles, plus a number of mobile games for Android and iOS. Due to the wide range of their products and services, you proposed that they use API Gateway.   \n\nWhat are the key features of API Gateway that you can tell your client? (Select TWO.)",
      "options": [
          {
              "isCorrect": true,
              "text": "​\n\nYou pay only for the API calls you receive and the amount of data transferred out.\n\n(Correct)"
          },
          {
              "isCorrect": true,
              "text": "​\n\nEnables you to build RESTful APIs and WebSocket APIs that are optimized for serverless workloads.\n\n(Correct)"
          },
          {
              "isCorrect": false,
              "text": "​\n\nEnables you to run applications requiring high levels of inter-node communications at scale on AWS through its custom-built operating system (OS) bypass hardware interface."
          },
          {
              "isCorrect": false,
              "text": "​\n\nIt automatically provides a query language for your APIs similar to GraphQL."
          },
          {
              "isCorrect": false,
              "text": "​\n\nProvides you with static anycast IP addresses that serve as a fixed entry point to your applications hosted in one or more AWS Regions."
          }
      ],
      "explain": "Explanation\n\nAmazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. With a few clicks in the AWS Management Console, you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), code running on AWS Lambda, or any web application. Since it can use AWS Lambda, you can run your APIs without servers.\n\n\n\n\n\n\n\nAmazon API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management. Amazon API Gateway has no minimum fees or startup costs. You pay only for the API calls you receive and the amount of data transferred out.\n\nHence, the correct answers are:\n\n- Enables you to build RESTful APIs and WebSocket APIs that are optimized for serverless workloads\n\n- You pay only for the API calls you receive and the amount of data transferred out.\n\n\n\n\nThe option that says: It automatically provides a query language for your APIs similar to GraphQL is incorrect because this is not provided by API Gateway.\n\nThe option that says: Provides you with static anycast IP addresses that serve as a fixed entry point to your applications hosted in one or more AWS Regions is incorrect because this is a capability of AWS Global Accelerator and not API Gateway.\n\nThe option that says: Enables you to run applications requiring high levels of inter-node communications at scale on AWS through its custom-built operating system (OS) bypass hardware interface is incorrect because this is a capability of Elastic Fabric Adapter and not API Gateway.\n\n\n\n\nReferences:\n\nhttps://aws.amazon.com/api-gateway/\n\nhttps://aws.amazon.com/api-gateway/features/\n\n\n\n\nCheck out this Amazon API Gateway Cheat Sheet:\n\nhttps://tutorialsdojo.com/aws-cheat-sheet-amazon-api-gateway/"
  }
]
console.info(`Data1 Length ${data.length}`)
console.info(`Data2 Length ${data2.length}`)
  return [...data, ...data2];
}

export const state = { questions: initState() };
