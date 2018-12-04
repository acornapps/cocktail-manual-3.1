var store = [{
        "title": "What is Cengjiyun?",
        "excerpt":"Cengjiyun is an all-in-one container management platform. As the use of cloud computing became widespread, there has been a growing demand for infrastructure and application service management. This can be attributed to the limitations in utilizing the advantages of the cloud with past development and operations methods. In the applications...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.0/",
        "teaser":null},{
        "title": "Cengjiyun Structure Overview",
        "excerpt":"Cengjiyun is comprised of five layers that correspond to its various roles. Cluster Management Layer: Responsible for infrastructure (cluster), where containers are deployed/executed, and orchestration. Kubernetes (https://kubernetes.io) handles orchestration and provides scaling management functions such as infrastructure management and monitoring. Service Management Layer: Responsible for container configuration and management based...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.1/",
        "teaser":null},{
        "title": "Cluster Management Layer",
        "excerpt":"The cluster management layer is divided into the infrastructure, which consists of clusters, and the container orchestration engine. The detailed configuration is as follows: Cengjiyun automatically provisions the cluster infrastructure and orchestration engine according to user configuration. The tool responsible for this is Cube. Cube constitutes high-availability (HA) Kubernetes clusters....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.2/",
        "teaser":null},{
        "title": "Service Management Layer",
        "excerpt":"In general, a single application or service consists of multiple containers. In particular, an orchestration engine such as Kubernetes requires additional objects such as a service port, controller, and storage volume in addition to the container. Therefore, to manage container-based applications and services, an abstraction unit is required to package...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.3/",
        "teaser":null},{
        "title": "Pipeline Layer",
        "excerpt":"The pipeline layer automates container building and deployment from code. The build step performed tasks (code download, build/test) and container image building sequentially based on user settings. Tasks use containers that perform tasks internally and can be scaled using public or user-created containers in addition to the default containers. Built...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.4/",
        "teaser":null},{
        "title": "Catalog Layer",
        "excerpt":"Containers implement deployments by creating images from configurations. Therefore, repetitive tasks can be minimized and frequently-used DBs and middleware runtime can be easily deployed whenever needed by creating templates of container images and deployment information. The catalog layer is responsible for creating and managing these templates. The following diagram shows...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.5/",
        "teaser":null},{
        "title": "Dashboard Layer",
        "excerpt":"The dashboard layer provides service status, monitoring, and cluster status information via a web-based UI. The dashboard provides role-specific views according to user privileges. Cengjiyun user privileges are as follows: Administrator : The admin manages clusters and has administrative privileges on all Cengjiyun services. DevOps : A DevOps user has...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.6/",
        "teaser":null},{
        "title": "1.Login",
        "excerpt":"Below is the initial Cengjiyun login screen. You can log in after entering the role, ID, and password. (Contact the administrator for ID information.) The password must be changed when first connecting or initializing the password. You can change your password or extend your password even after 90 days have...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/1/",
        "teaser":null},{
        "title": "2.Environment Settings",
        "excerpt":"  Environment settings allow user, account, and service management required to use Cengjiyun.                  Environment       Description                       User       Cengjiyun user                 Account       Public/private cloud account information to be used as a cloud resource                 Service       Workspace that can build, deploy, and operate applications          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2/",
        "teaser":null},{
        "title": "2.1 Users",
        "excerpt":"The user account list can be filtered by All, Active, or Inactive. (‘Y’ and ‘N’ accounts are displayed when ‘Active’ and ‘Inactive’ are selected, respectively.) Cengjiyun user accounts can be created, edited, and deleted, and ADMIN and DEVOPS privileges can be granted according to the account. a) Configuration → User...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1/",
        "teaser":null},{
        "title": "2.1.1 Add User",
        "excerpt":"This feature allows you to add user accounts. The user ID must be in an email format (user@example.com). The password settings feature is not currently supported, and thus, the password must be initialized and changed after creating an ID. (The password automatically assigned after initialization is ‘Pass0000’.) a) Configuration →...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 Edit User",
        "excerpt":"This feature allows you to modify user accounts. a) Configuration → User → User Action Menu &gt; Edit User &gt; Click the [Update] button when finished. b)The name, status, and privileges may be changed. (Note, however, that the user ID itself may not be changed). Status Description Active Active user...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 Delete User",
        "excerpt":"This feature allows you to delete user accounts. Deleted accounts are marked as active or inactive with a ‘Y’ or ‘N’ and not actually removed from the list. An ID can be reused if the status is changed to Active under Edit User. a) Configuration → User → User Action...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 Reset User Password",
        "excerpt":" This feature allows you to reset user passwords. (The password automatically assigned after initialization is ‘Pass0000’)   a) Configuration → User → User Action Menu &gt; Reset Password.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.1.4/",
        "teaser":null},{
        "title": "2.2 Account",
        "excerpt":"This feature allows you to register, edit, and delete public/private cloud account information to be used as a cloud resource. By registering an account, you can retrieve the resource and metering information of a provider or create a server. (Metering information is only available for Google Cloud Platform and AWS...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2/",
        "teaser":null},{
        "title": "2.2.1 Add Account",
        "excerpt":"This feature allows you to add accounts. (AWS and GCP accounts require additional information.) a) Configuration → Account → Click the Account Create button in the top-right corner. b) Select an account to be added and enter the name, type, and description. Provider Description Amazon Web Service Amazon’s public cloud...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.1/",
        "teaser":null},{
        "title": "2.2.1-1 Add AWS Account",
        "excerpt":"To register an AWS account, you need the corresponding access and secret keys. a) To obtain the access and secret keys, click Security Credentials in the top-right corner of the AWS service console. b) The following message about creating an IAM User will be displayed on the initial screen. From...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.1.1/",
        "teaser":null},{
        "title": "2.2.1-2 Add GCP Account",
        "excerpt":"To register a GCP account, you need a billing account ID and JSON-type GCP account key. a) You can check the GCP billing account ID from the Billing → Overview screen of the GCP service console. b) To be issued a GCP account key, click APIs &amp; Services → Credentials...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.1.2/",
        "teaser":null},{
        "title": "2.2.2 Edit Account",
        "excerpt":"This feature allows you to modify the name, type, and status of an account. For public cloud providers, the key may also be modified. If the account is being used in a cluster, only the account name and description may be modified. a) Configuration → Account → Account Action Menu...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 Delete Account",
        "excerpt":" This feature allows you to delete accounts. If the account is currently in use, the delete button will be disabled.   a) Configuration → Account → Account Action Menu &gt; Delete Account.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.2.3/",
        "teaser":null},{
        "title": "2.3 Service",
        "excerpt":"Service assigns a workspace to build, deploy, and run applications, and users, clusters, and libraries can be registered for each service. The service list can be filtered by All, Active, or Inactive. (‘Y’ and ‘N’ services are displayed when ‘Active’ and ‘Inactive’ are selected, respectively.) Refer to the Cluster section...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3/",
        "teaser":null},{
        "title": "2.3.1 Add Service",
        "excerpt":"This feature allows you to add services. Users, clusters, and registries (storage) can be registered for each service. a) Configuration → Service → Click the Service Create button in the top-right corner. b) Enter the service name, description, color, registry, user, and cluster information. c) Only items with the checked...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 Edit Service",
        "excerpt":"This feature allows you to modify service information. The service name, description, color, and status may be changed. Users and clusters associated with the service may also be edited. a) Environment Settings → Service → Service Action Menu → Edit Service → Click the [Update] button when finished. b) The...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 Delete Service",
        "excerpt":" This feature allows you to delete services. Service deletion will be restricted if clusters are registered with the service at the time of deletion. Be sure to delete any registered clusters from Edit Service before proceeding.   a) Configuration → Service → Service Action Menu &gt; Delete Service.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2.3.3/",
        "teaser":null},{
        "title": "3.Service",
        "excerpt":"  This feature allows you to create and manage application maps, build tasks, and workloads.                  Item       Description                              Displays number and types of clusters registered in a service                        Redirects to Build Management page                        Redirects to Create Application Map page          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3/",
        "teaser":null},{
        "title": "3.1 Application Management",
        "excerpt":"  This feature allows you to manage application maps and their associated workloads and server groups.   ㅤㅤㅤㅤㅤ  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1/",
        "teaser":null},{
        "title": "3.1.1 Application Map",
        "excerpt":"An application map is an application configuration unit. A group is configured as a logical unit, and a workload is deployed in the group. The metering information of clusters constituting a map or workload monitoring information can be checked. A deployment task can be created to create or update a...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.1/",
        "teaser":null},{
        "title": "3.1.1-1 Create Application Map",
        "excerpt":"  This feature allows you to create new application maps for a service.   a) Service → Click the [+] button on the right.   b) Select the desired cluster and specify map and namespace names to create an application map.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.1.1/",
        "teaser":null},{
        "title": "3.1.1-2 Change Application Map Name",
        "excerpt":"This feature allows you to modify an application map name. a) Hover the mouse over Service → Application Map Name and click the ✎ button on the right of the application map. b) Change the contents in the enabled input field and press the Enter key to rename the application...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.1.2/",
        "teaser":null},{
        "title": "3.1.1-3 Delete Application Map",
        "excerpt":" This feature allows you to delete application maps. No workloads must be currently deployed to delete an application map.   a) Service → Select Application Map → Delete Application Map.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.1.3/",
        "teaser":null},{
        "title": "3.1.2 Group Management",
        "excerpt":"workloads are managed in groups, and a workload can be created in a particular group. You can change group names and add, move, or delete groups. You can also change the number of columns. a) Service → Select Application Map → Click the [▼] (Action) button of a workload group...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.2/",
        "teaser":null},{
        "title": "3.1.3 Workload",
        "excerpt":"  A workload is the minimum unit of an application. One or more workloads can form a single application.   a) View workloads configured in a map by clicking Service → Application Map.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3/",
        "teaser":null},{
        "title": "3.1.3-1 Create Workload",
        "excerpt":"This feature allows you to create and run workloads from Group Management. a) Click the [+] button (Create workload) on a workload group. Select the workload type. b) Enter basic, container, instance, update policy, service port, and volume information and click the [Create] button to create a workload. Basic workload...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.1/",
        "teaser":null},{
        "title": "3.1.3-2 Edit Workload",
        "excerpt":"This feature allows you to modify and redeploy workloads (running or stopped). a) Service → Select Application Map → Workload. b) Edit basic, container, instance, update policy, service port, and volume information and click the [Update] button to redeploy the workload. If the workload is running, the workload type and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.2/",
        "teaser":null},{
        "title": "3.1.3-3 View Workload Instance Information",
        "excerpt":"This feature allows you to view workload instance information. Instance Information Pods Detailed info, status info, event info, deployment info, web terminal (container), log (container) Services Detailed info, event info, deployment info Persistent Volume Claims Detailed info, detailed volume info, deployment info Deployments Detailed info, event info, deployment info, auto-scaler...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.3/",
        "teaser":null},{
        "title": "3.1.3-4 Stop Workload",
        "excerpt":"  This feature allows you to stop a deployed workload. Stopping a workload will delete the corresponding pods.   a) Service → Select Application Map → Click the [Action] button on a running workload → Stop.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.4/",
        "teaser":null},{
        "title": "3.1.3-5 Start Workload",
        "excerpt":"  This feature allows you to start a stopped workload.   a) Service → Select Application Map → Click the [Action] button on a stopped workload → Start.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.5/",
        "teaser":null},{
        "title": "3.1.3-6 Restart Workload",
        "excerpt":"  This feature allows you to restart a workload. It’s essentially the same action as rebooting a computer.   a) Service → Select Application Map → Click the [Action] button on a running workload → Restart.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.6/",
        "teaser":null},{
        "title": "3.1.3-7 Remove Workload",
        "excerpt":"  This feature allows you to remove a stopped workload.   a) Service → Select Application Map → Click the [Action] button on a stopped workload &gt; Terminate.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.3.7/",
        "teaser":null},{
        "title": "3.1.4 Monitoring",
        "excerpt":"  You can view resource usage (CPU, memory, and network) by workload, pod, or container.   a) Service → Select Application Map → Monitoring.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.4/",
        "teaser":null},{
        "title": "3.1.5 Pipeline",
        "excerpt":"With the pipeline feature, you can build an image and deploy to a workload all at once. You can also change the image version of a deployed workload and quickly redeploy. a) Service &gt; Select Application Map &gt; Pipeline. Pipeline Menu Description Batch execution Execute pipeline tasks in batch Run...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.5/",
        "teaser":null},{
        "title": "3.1.6 Persistent Volume",
        "excerpt":"Provides persistent volume status, creation and deletion. a) Service → Application map → Persistent volume Items Description Volume Name Name of the created persistent volume, click to go to the details of the persistent volume Volume type Volume Type (Single, Shared) Status The state of the volume (Ready, Mounted) Usage...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.6/",
        "teaser":null},{
        "title": "3.1.6-1 Creating Persistent Volumes",
        "excerpt":"Creating Persistent Volumes. a) Service → Application map → Persistent volume Items Description Persistent volume type Volume Type (Single, Shared) Storage Exposing a clustered storage list Access mode Select ReadWriteOnce if the persistent volume type is Single, ReadWriteMany, ReadOnlyMany if it is a Shard Name The name of the persistent...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.6.1/",
        "teaser":null},{
        "title": "3.1.6-2 Delete Persistent Volumes",
        "excerpt":" Delete the persistent volume.   a) Service → Application map → Persistent volume → Persistent Action Menu(Activate) → Click Delete    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.6.2/",
        "teaser":null},{
        "title": "3.1.7 Settings",
        "excerpt":" Application units can be used like volumes by storing variable values in the form key=value.   a) Service → Select Application Map → Settings.                    Menu       Description                       Config Map       Register, edit, and delete config maps                 Secret       Register, edit, and delete secrets          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7/",
        "teaser":null},{
        "title": "3.1.7-1 Config Map",
        "excerpt":"This feature allows you to save config files as maps on workloads to be used as volumes. a) Service → Select Application Map → Settings → Config Map. Item Description Redirects to Add Config Map page Name Name of config map (user-defined) Description Config Map Description (Custom) Config map action...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.1/",
        "teaser":null},{
        "title": "3.1.7-1a Add Config Map",
        "excerpt":"This feature allows you to add config maps. a) Service &gt; Select Application Map &gt; Settings &gt; Config Map &gt; Click the [+] button to be redirected to the Add Config Map page. b) Enter the name and data values and click the [Create] button in the top-right corner to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.1a/",
        "teaser":null},{
        "title": "3.1.7-1b Edit Config Map",
        "excerpt":" This feature allows you to modify config map data (excluding name).   a) Service → Select Application Map → Settings → Config Map → Config Map Action Menu (Activate) → Edit Config Map     b) After changing the data value(s), click the [Update] button to apply the changes.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.1b/",
        "teaser":null},{
        "title": "3.1.7-1c Delete Config Map",
        "excerpt":"  This feature allows you to delete service config maps.   a) Service → Select Application Map → Settings → Config Map → Config Map Action Menu (Activate) → Config Map Delete    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.1c/",
        "teaser":null},{
        "title": "3.1.7-2 Secret",
        "excerpt":"  This feature allows you to save secret files on servers to be used as environment variables or volumes.   a) Service → Select Application Map → Settings → Secret.                    Item       Description                              Redirects to Add Secret page                 Name       Name of secret (user-defined)                 Description       Secret Description (Custom)                        Secret action menu          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.2/",
        "teaser":null},{
        "title": "3.1.7-2a Add Secret",
        "excerpt":"This feature allows you to add secrets to a service. a) Service → Select Application Map → Settings → Secret → Click the [+] button to be redirected to the Add Secret page. b) Enter the name and data values and click the [Create] button in the top-right corner to...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.2a/",
        "teaser":null},{
        "title": "3.1.7-2b Edit Secret",
        "excerpt":"This feature allows you to modify secret data (excluding name) added to a workload. a) Service → Select Application Map → Settings → Secret → Secret Action Menu (Activate) → Edit Secret b) After changing the data value(s), click the [Save] button to apply the changes. (Secret values are hidden...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.2b/",
        "teaser":null},{
        "title": "3.1.7-2c Delete Secret",
        "excerpt":"  This feature allows you to delete service secrets.   a) Service → Select Application Map → Settings → Secret → Secret Action Menu (Activate) → Delete Secret    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.1.7.2c/",
        "teaser":null},{
        "title": "3.2 Build Management",
        "excerpt":"This feature allows you to manage build tasks for a Docker image. You can download an application, build the source file, and build the image file to be uploaded to a Harbor registry. a) Service → Build Management. Item Description Create Build button Build Name Name of build Image Name...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2/",
        "teaser":null},{
        "title": "3.2.1 Add Build",
        "excerpt":"This feature allows you to add Docker image build tasks. Three options are available: Application download, application build, and image build. a) Service &gt; Build Management &gt; Build Action Menu (Activate) &gt; Edit Task Settings b) Enter the necessary application download, application build, and image build information and click the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.1/",
        "teaser":null},{
        "title": "3.2.2 Edit Task Settings",
        "excerpt":"This feature allows you to modify build tasks. The build name, however, may not be changed. A previously-downloaded source can be removed, and each of the three tasks (application download, application build, and image build) can be executed separately. a) Service → Build Management → Build Action Menu (Activate) →...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.2/",
        "teaser":null},{
        "title": "3.2.3 History",
        "excerpt":"This feature allows you to view the build history of a particular build. Logs are available in build execution phases. a) Service → Build Management → Build Action Menu (Activate) → History b) Check the build action name, status, date, duration, image name, image size, and build log from the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.3/",
        "teaser":null},{
        "title": "3.2.4 Execute Build",
        "excerpt":"This feature allows you to execute a build task. When a build is executed, application download, application build, and image build are performed all at once. a) Service → Build Management → Build Action Menu (Activate) → Build Run b) The current action changes, and the log window becomes activated...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.4/",
        "teaser":null},{
        "title": "3.2.5 Cancel Build",
        "excerpt":"  Cancel the build operation. You can only cancel the build job being in the RUNNING state.   a) Service → Build Management → Build Action Menu (Activate) → Build Cancel    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.5/",
        "teaser":null},{
        "title": "3.2.6 View Log",
        "excerpt":"  This feature allows you to view the most recent log of a build operation. A real-time log will be displayed if a build is currently being processed.   a) Service → Build Management → Build Action Menu (Activate) → Log View    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.6/",
        "teaser":null},{
        "title": "3.2.7 Delete Task",
        "excerpt":"  This feature allows you to delete build tasks. When performed, the corresponding cache and downloaded source folder will be deleted first before deleting the actual task.   a) Service → Build Management → Build Action Menu (Activate) → Task Delete    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/3.2.7/",
        "teaser":null},{
        "title": "4.Catalog",
        "excerpt":"This feature allows you to easily create, deploy, and manage workloads by creating a template of an application configuration. Use the catalog feature to use multiple workloads at once. The catalog feature is divided into service catalogs and platform catalogs. Catalog Menu Description Service Catalog User-generated catalog Platform Catalog Default...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4/",
        "teaser":null},{
        "title": "4.1 Save Catalog",
        "excerpt":"This feature allows you to create catalogs and deploy multiple desired workloads at once. If a workload container image is a build, only the image is saved and converted into a common image to be saved as a catalog. A saved catalog can be found in the service catalog. When...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.1/",
        "teaser":null},{
        "title": "4.2 Deploy Catalog",
        "excerpt":"This feature allows you to deploy generated catalogs. If necessary, unnecessary instances can be excluded or edited prior to deployment. a) Catalog → Click the [Deployment] button on the desired template b) Select the service, cluster, and application map from the template category and click [Deploy]. You may exclude unwanted...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.2/",
        "teaser":null},{
        "title": "4.3 Edit Catalog",
        "excerpt":"This feature allows you to modify catalog information. You may modify the template version, summary, and other information, as well as the deployment information for each instance. a) Catalog → Click the [Edit] button on the desired template b) You may modify the template version, summary, and other information. The...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.3/",
        "teaser":null},{
        "title": "4.4 Delete Catalog",
        "excerpt":"  This feature allows you to delete unnecessary catalogs (excluding Platform catalogs).   a) Catalog → Click the [Edit] button on the desired template   b) Select the desired template version and click the [Delete] button. The selected template version will be deleted.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/4.4/",
        "teaser":null},{
        "title": "5.Cluster",
        "excerpt":"This feature provides cluster registration management functions, as well as monitoring, volume, alert, and metering services for each node and application. Cluster Menu Descrition Node Resource utilization (CPU, memory, and network) for all nodes and monitoring of individual nodes Application Resource utilization (CPU, memory, and network) for all applications and...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5/",
        "teaser":null},{
        "title": "5.1 Cluster Management",
        "excerpt":"This feature allows you to add, edit, and delete Kubernetes cluster information assigned by a provider. a) Cluster → Click the [Sort] button and select the desired criteria. Cluster Settings Description + Add Cluster Redirects to Add Cluster page Cluster Cluster type Node Number of nodes in a cluster CPU...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.1/",
        "teaser":null},{
        "title": "5.1.1 Add Cluster",
        "excerpt":"This feature allows you to add clusters. a) Cluster → Click the [+] button in the top-right corner. b) Enter basic information (name, k8s version, and description). Basic Information Description Name Name of cluster to be added k8s version Kubernetes version installed on cluster (e.g., 1.8.13) ID Cluster unique ID...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.1.1/",
        "teaser":null},{
        "title": "5.1.2 Edit Cluster",
        "excerpt":"  This feature allows you to modify a cluster’s basic information, including provider, monitoring status, and type. However, the provider account, type, and region may not be changed.   a) Cluster → Select Cluster → Registration Management → Edit. Click the [Update] button when finished.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.1.2/",
        "teaser":null},{
        "title": "5.1.3 Delete Cluster",
        "excerpt":"  This feature allows you to delete clusters. However, a cluster that is being used by an application map may not be deleted.   a) Cluster → Select Cluster → Registration Management → Click the [Delete] button.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.1.3/",
        "teaser":null},{
        "title": "5.2 Node",
        "excerpt":"This feature allows you to view the total resource utilization (disk drive, CPU, memory, and network) of all nodes, as well as the label and status information of individual nodes. You can click on a node name for detailed information. a) Cluster → Select Cluster → Node. b) Click on...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.2/",
        "teaser":null},{
        "title": "5.3 Application",
        "excerpt":"  This feature allows you to view the total resource utilization (disk drive, CPU, memory, and network) of all applications, as well as the namespace and instance information of individual applications. Click an application name to be redirected to the application map page.   a) Cluster → Select Cluster → Application.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.3/",
        "teaser":null},{
        "title": "5.4 Volume",
        "excerpt":"This feature allows you to add public cloud and external storage information and also provides volume monitoring. a) Cluster → Select Cluster → Volume. Storage Settings Description [+] button Redirects to Add Storage page Name Name of storage (user-defined) Type Type of storage (NFS/EBS/Google Persistent Disk/Azure Disk) Storage Class Name...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.4/",
        "teaser":null},{
        "title": "5.4.1 Add Storage",
        "excerpt":"This feature allows you to add storage volumes. a) Cluster → Select Cluster. b) Select a volume from the detailed cluster screen c) Enter cluster, name, description, storage plugin, Reclaim Policy, and storage class name in order. Storage Info Description Name PV name Description User-defined PV description Type Threge Type...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.4.1/",
        "teaser":null},{
        "title": "5.4.2 Edit Storage",
        "excerpt":"  This feature allows you to modify storage information. Note, however, that NFS Named storages may not be modified.   a) Cluster → Select Cluster → Volume → Volume Action button &gt; Edit Storage.     b) You may modify the name, description, Reclaim policy, storage class name, and parameter values.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.4.2/",
        "teaser":null},{
        "title": "5.4.3 Delete Volume",
        "excerpt":"  This feature allows you to delete Storage information.   a) Cluster → Select Cluster → Volume → Volume Action button → Delete Volume.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.4.3/",
        "teaser":null},{
        "title": "5.5 Alerts",
        "excerpt":"  This feature allows you to receive alerts for cluster events.   a) Cluster → Select Cluster → Alarm.     b) Click on an alarm name to view detailed information.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.5/",
        "teaser":null},{
        "title": "5.5.1 Alerts List",
        "excerpt":"An alert occurs when the occurrence condition in the following list continues for the duration time. AlertManager Alarm ID ALM-001 Severity warning Alarm Name AlertmanagerDown duration 5minute occurrence condition Alertmanager Occurs when metrics can not be collected Action Check Prometheus logs and Alertmanager logs and events. If necessary, restart the...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.5.1/",
        "teaser":null},{
        "title": "5.6 Metering",
        "excerpt":"  This feature allows you to monitor metering (fee) information per in-use cluster.   The metering service is only available for the AWS and GCP public clouds.   a) Cluster → Select Cluster → Metering.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/5.6/",
        "teaser":null},{
        "title": "6.Dashboard",
        "excerpt":"The dashboard allows you to view Cengjiyun service information at a glance. Summary Displays the number of currently-registered/managed applications, workloads clusters, and the total cloud cost for the current month. Resource Status You can check the total amount of CPU, memory, requested amount, usage, storage (Node, Pv) and usage. Cluster...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6/",
        "teaser":null},{
        "title": "6.1 User Management",
        "excerpt":"This feature allows you to view and manage current user information. a) Dashboard → Click the [User] button in the bottom-left corner Item Description ID ID of account currently in use User Language Choose from Korean, Japanese, and English Theme Choose between light and dark themes Change Password A new...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.1/",
        "teaser":null},{
        "title": "7.Glossary",
        "excerpt":"  The following section provides a list of common Kubernetes and Cengjiyun terminologies and explanations.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7/",
        "teaser":null},{
        "title": "7.1 Kubernetes(k8s)",
        "excerpt":"1.Cluster Term Description Namespace A separate environment in which users across multiple teams or projects can work in virtual k8s clusters Nodes A physical server or VM running clustered k8s applications Persistent Volumes(PV) External storage; Supports NFS, iSCSI, and cloud storage systems Roles Grants permissions according to usage case. Storage...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.1/",
        "teaser":null},{
        "title": "7.2 Cengjiyun",
        "excerpt":"1.Environment Settings Service for pre-registering information to use Cengjiyun Term Description User User management for use of Cengjiyun Account Management of user credentials for k8s clusters Service Distributes and manages tasks on a job or project basis. The administrator may grant access privileges to general users on a service basis...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.2/",
        "teaser":null},{
        "title": "7.3 Cengjiyun System Error Code",
        "excerpt":"1. Error Code Code Message CCCM001 Can not reveal specific error number. CCCM002 Unknown error CCCM004 Invalid function call argument CCCM005 Unauthorized request CCCM006 The information passed is not correct CCCM007 Server, job, etc. are not correct or can not process request CCCM019 Internal server error CCCM020 External call API...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.3/",
        "teaser":null},{
        "title": "8.Customer Support",
        "excerpt":"Thank you for using Cengjiyun. Contact us for technical support and product purchase consultations. We provide the following services: On-site Q&amp;A and product consultation services. Professional technical consultations via telephone or fax. (Limited to customers who have registered their products) Various event invitations and information. Support Email: byoungoh.lee@namutech.co.kr Product Developer...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/8/",
        "teaser":null},{
        "title": "层积云",
        "excerpt":"                                                                                                                                    한국어 메뉴얼                                                                                                      Learn More                                                                                                                                                           中文手册                                                                                                      Learn More                                                                                                                                                           English Menual                                                                                                      Learn More                                       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/",
        "teaser":null},{
        "title": "청지윈이 란?",
        "excerpt":"청지윈은 올인원 컨테이너 관리 플랫폼(All-in-one Container Management Platform)이다. 클라우드 사용이 보편화 되면서, 인프라 뿐 아니라 어플리케이션, 서비스 관리에 대한 요구가 높아지고 있다. 과거와 같은 개발, 운영 방식으로는 클라우드의 장점을 활용하기에 한계가 있기 때문이다. 특히 어플리케이션 영역에서는 지속적인 통합 및 배포(Continuous Integration/Deploy, CI/CD), 마이그레이션(Migration), 멀티/하이브리드 클라우드 구축 등 자동화, 효율화, 통합...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.0/",
        "teaser":null},{
        "title": "청지윈 구성 개요",
        "excerpt":"청지윈은 그 역할에 따라 5개의 레이어로 구성된다. Cluster Management Layer: 컨테이너가 배포/실행되는 인프라(클러스터)와 오케스트레이션(Orchestration)을 담당하는 레이어다. 오케스트레이션은 Kubernetes(https://kubernetes.io)가 담당하고 인프라 관리, 모니터링 등 확장 관리 기능을 제공한다. Service Management Layer: 서비스(Workload)를 기준으로 컨테이너 구성과 관리를 담당하는 레이어다. 서비스를 구성하는 다수의 컨테이너와 관련 객체를 패키징하고 그 수명주기와 모니터링을 관리한다. Pipeline: 코드에서...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.1/",
        "teaser":null},{
        "title": "Cluster Management Layer (클러스터 관리 레이어)",
        "excerpt":"클러스터 관리 레이어는 클러스터를 구성하는 인프라 스트럭처와 컨테이너 오케스트레이션 엔진 부분으로 구분된다. 상세 구성은 아래 그림과 같다. 청지윈은 클러스터 인프라와 오케스트레이션 엔진을 사용자의 설정에 따라 자동 프로비져닝(Provisioning)하는데 이를 담당하는 도구가CUBE이다. CUBE는 고가용(High Availability, HA)의 Kubernetes클러스터를 구성한다. CUBE가 프로비져닝하는 클러스터 구성은 높은 안정성과 보안, 확장성을 제공한다.(이를 CUBE클러스터라 한다.) CUBE클러스터는 현재 다음과...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.2/",
        "teaser":null},{
        "title": "Service Management Layer (서비스 관리 레이어)",
        "excerpt":"일반적으로 하나의 어플리케이션 및 서비스는 다수의 컨테이너로 구성된다. 특히 Kubernetes와 같은 오케스트레이션 엔진의 경우 컨테이너 외에도 서비스 포트, 컨트롤러, 볼륨등의 추가적인 객체를 필요로 한다. 따라서 컨테이너 기반의 어플리케이션 및 서비스를 관리하기 위해서는 컨테이너와 관련 객체를 패키징하고 관리하는 추상화 단위가 필요하다. 서비스 관리 레이어는 이를 담당하는 레이어다. 청지윈의 서비스 관리는 다음과...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.3/",
        "teaser":null},{
        "title": "Pipeline Layer (파이프라인 레이어)",
        "excerpt":"파이프라인 레이어는 코드로부터 컨테이너 빌드와 배포를 자동화 한다. Build는 코드 다운로드, 코드 빌드 및 테스트등 작업(Task), 컨테이너 이미지 빌드를 사용자 설정을 기준으로 순차적으로 수행한다. 작업(Task)은 내부에서 작업을 수행하는 컨테이너를 사용하는데, 기본 제공되는 컨테이너 외에도 공개 또는 사용자가 만든 컨테이너를 사용하여 확장 할 수 있다. 빌드 된 이미지는 청지윈 서버의 컨테이너로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.4/",
        "teaser":null},{
        "title": "Catalog Layer (카탈로그 레이어)",
        "excerpt":"컨테이너는 그 구성을 이미지화하여 배포 실행한다. 따라서 자주 사용하는 DB나 미들웨어 등의 런타임은 컨테이너 이미지와 배포 정보를 템플릿화 하면 반복적인 작업을 줄이고 언제든 필요할 때 쉽게 배포하여 사용 할 수 있다. 이러한 템플릿을 생성하고 관리를 담당하는 레이어가 카탈로그다. 카탈로그 레이어의 구성을 도식화하면 아래와 같다. 카탈로그는 목적에 따라 두 가지 형태로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.5/",
        "teaser":null},{
        "title": "Dashboard Layer (대시보드 레이어)",
        "excerpt":"청지윈의 대시보드 레이어는 서비스 현황, 모니터링, 클러스터 현황 등을 웹UI형태로 제공한다. 대시보드는 사용자의 역할에 맞는 뷰를 권한에 따라 제공한다. 청지윈의 사용자 권한은 다음과 같다. Administrator(Admin) : 클러스터 관리를 수행하고, 청지윈의 모든 서비스에 대해 관리 권한을 가진다. DevOps : 할당된 하나 이상의 서비스에 대해서만 관리 권한을 가진다. 대시보드는 권한이 있는 서비스만...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.6/",
        "teaser":null},{
        "title": "1. 로그인",
        "excerpt":" 아래는 청지윈의 초기 로그인 화면이다.   Role, ID, Password 입력 후 로그인 할 수 있다.   (아이디는 관리자에게 별도 문의)      최초 접속 또는 비밀번호 초기화시에는 반드시 비밀번호를 변경 해야한다.      기간이 90일이 경과한 경우에도 비밀번호를 변경하거나 비밀번호를 연장 할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/1/",
        "teaser":null},{
        "title": "2.환경 설정",
        "excerpt":" 환경설정을 통해 층적 이용에 필요한 사용자, 계정, 서비스 관리를 할 수 있다.                     환경 설정 메뉴       설명                       사용자       청지윈을 사용하는 유저                 계정       Cloud 리소스로 사용 할 Public/Private 클라우드 계정 정보                 서비스       어플리케이션을 빌드 및 배포, 운영 할 수 있는 Workspace          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2/",
        "teaser":null},{
        "title": "2.1 사용자",
        "excerpt":"사용자 계정 목록을 전체/사용/미사용으로 분류하여 조회할 수 있다.(사용여부가 Y인 계정은 ‘사용’, N인 계정은 ‘미사용’ 선택 시 표시) 청지윈 사용자 계정을 생성 및 수정, 삭제할 수 있으며 계정에 따라 ADMIN, DEVOPS 권한을 줄 수 있다. a) 환경설정 → 사용자 → 사용여부 버튼을 클릭하여 ‘전체/사용/미사용’ 중 하나를 선택한다. 사용자 설정 사용자 설정...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1/",
        "teaser":null},{
        "title": "2.1.1 사용자 추가",
        "excerpt":"청지윈 사용자 추가 기능이다. 사용자 아이디는 반드시 이메일 형식( user@example.com )이어야 하며 패스워드 설정기능은 현재 지원하고 있지 않으니 아이디 생성 후에는 반드시 비밀번호 초기화 후 변경하여 사용해야 한다. (초기화 후 제공받는 초기 비밀번호는 ‘Pass0000’이다.) a) 환경설정 → 사용자 → 우측상단 사용자 생성 버튼 클릭한다. b) 사용자 아이디, 이름, 권한을 선택...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 사용자 편집",
        "excerpt":" 청지윈 사용자 정보를 편집 하는 기능 이다.   a) 환경설정 → 사용자 → 사용자 액션 메뉴 → 사용자 편집 → 수정완료 후 수정버튼을 클릭한다.     b) 사용자 아이디를 제외한 이름, 상태 및 권한 수정이 가능하다.                    상태       설명                       Active       사용자 활성화                 Inactive       사용자 비활성          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 사용자 삭제",
        "excerpt":" 사용자 계정을 삭제하는 기능이다. 삭제된 계정은 목록에서 제거되는 것이 아닌  Y or N 으로 활성화/비활성화 표기된다.   사용자 편집에서 상태를 Active로 변경하면 해당 아이디를 재사용할 수 있다.   a) 환경설정 → 사용자 → 사용자 액션 메뉴 → 사용자 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 사용자 비밀번호 초기화",
        "excerpt":" 청지윈 사용자 비밀번호를 초기화 하는 기능이다.(초기화 후 제공받는 초기 비밀번호는 ‘Pass0000’이다.)   a) 환경설정 → 사용자 → 사용자 액션 메뉴 → 사용자 비밀번호 초기화를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.4/",
        "teaser":null},{
        "title": "2.2 계정",
        "excerpt":"클라우드 리소스로 사용 할 Public/Private 클라우드 계정 정보를 등록, 편집, 삭제하는 기능 이다. 계정을 등록함으로써 해당 프로바이더의 리소스, 미터링 정보를 가져 오거나 서버를 생성 할 수 있다. (미터링 정보는 Google Cloud Platform, AWS 클라우드에 한하여 확인이 가능하다.) 현재 AWS, Azure, BareMetal(Onpremise) 를 지원한다. 계정 목록을 전체/사용/미사용으로 분류하여 조회할 수 있다.(사용여부가...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2/",
        "teaser":null},{
        "title": "2.2.1 계정 추가",
        "excerpt":"계정을 추가하여 사용할 수 있다. (AWS 계정, GCP 계정의 경우 추가정보 입력이 필요하다.) a) 환경설정 → 계정 → 우측 상단 계정 추가 버튼을 클릭한다. b) 등록할 계정 선택 및 이름, 유형, 설명을 작성한다. 프로바이더 설명 Amazon Web Service Amazon사의 Public 클라우드 서비스 Google Cloud Platform Google사의 Public클라우스 서비스 Microsoft cloud...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.1/",
        "teaser":null},{
        "title": "2.2.1-1 AWS 계정 추가",
        "excerpt":"AWS 계정 등록을 위해서는 AWS 계정의 Access Key와 Secret Key가 필요하다. a) Access Key와 Secret Key를 발급받기 위해 AWS 서비스 콘솔에서 상단 우측 카테고리에서 ‘Security Credentials’를 클릭한다. b) 첫 화면에서 아래와 같은 경고창을 만나는데 IAM User를 생성할 것인지에 대한 내용이고, 여기서는 왼쪽 Continue to Security Credentials 버튼을 눌러 계속 진행한다....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.1.1/",
        "teaser":null},{
        "title": "2.2.1-2 GCP 계정 추가",
        "excerpt":"GCP 계정을 등록을 위해서는 결제계정 아이디와 JSON타입의 GCP 계정키가 필요하다. a) GCP 결제 계정 아이디는 GCP 서비스 콘솔에서 Billing -&gt; Overview 화면에서 확인 할 수 있다. b) GCP계정키를 발급 받기 위해 GCP 서비스 콘솔에서 APIs &amp; services -&gt; Credentials 를 클릭한다. c) 이후 화면에서 Create credentials을 클릭하고, Service account key를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.1.2/",
        "teaser":null},{
        "title": "2.2.2 계정 편집",
        "excerpt":"계정 이름 및 유형, 상태 수정이 가능하며 퍼블릭 클라우드 프로바이더의 경우 키 수정이 가능하다. 계정이 클러스터에서 사용중인 경우 계정 이름과 설명만 수정 가능하다. a) 환경설정 → 계정 → 계정 액션 메뉴 → 계정 편집 → 수정완료 후 수정버튼을 클릭한다. b) 이름, 유형, 설명, 상태 및 키를 수정 한다. 상태 설명...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 계정 삭제",
        "excerpt":" 등록된 계정 삭제 할 수 있다. 해당 계정이 사용중이라면 삭제 버튼이 비활성화 된다.   a) 환경설정 → 계정 → 계정 액션 메뉴 → 계정 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.2.3/",
        "teaser":null},{
        "title": "2.3 서비스",
        "excerpt":"어플리케이션을 빌드 및 배포, 운영할 수 있는 Work Space를 할당한다. 서비스 별로 사용자, 클러스터, 라이브러리 등록이 가능하다. 서비스 목록을 전체/사용/미사용으로 분류하여 조회 할 수 있다. (사용여부가 Y인 서비스는 ‘사용’, N인 서비스는 ‘미사용’ 선택 시 표시된다.) 클러스터 추가는 해당 메뉴얼의 클러스터 설명을 참고 한다. a) 환경설정 → 서비스 → 사용여부 버튼을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3/",
        "teaser":null},{
        "title": "2.3.1 서비스 추가",
        "excerpt":"서비스를 추가 하는 기능이다. 서비스 별로 사용자 등록 및 클러스터, 레지스트리(저장소) 등록을 할 수 있다. a) 환경설정 → 서비스 → 오른쪽 상단 서비스 생성 버튼을 클릭한다. b) 서비스에 사용할 이름, 설명, 색상, 레지스트리 및 사용자, 클러스터 정보를 등록한다. c) 사용자, 클러스터 추가는 체크박스가 선택 된것만 반영이 된다. 사용자 편집 클러스터...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 서비스 편집",
        "excerpt":" 서비스 정보를 편집하는 기능이다. 서비스 이름, 설명, 색상, 상태 변경이 가능하며 해당 서비스를 사용할 사용자 편집, 서비스에 등록할 클러스터 편집이 가능하다.   a) 환경설정 → 서비스 → 서비스 액션 메뉴 → 서비스 편집 → 수정완료 후 수정버튼을 클릭한다.     b) 서비스 이름, 설명, 색상, 상태 및 사용자, 클러스터 수정이 가능하다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 서비스 삭제",
        "excerpt":" 서비스를 삭제 하는 기능이다. 삭제 시, 서비스에 클러스터가 등록되어 있을 경우 삭제가 불가능하며 서비스 편집에서 클러스터를 제거 후 삭제를 진행할 수 있다.   a) 환경설정 → 서비스 → 서비스 액션 메뉴 → 서비스 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.3.3/",
        "teaser":null},{
        "title": "3.서비스",
        "excerpt":" 어플리케이션 맵과 빌드작업, 워크로드를 생성, 관리 하는 기능이다.                   목록       설명                              서비스에서 등록된 클러스터 종류와 클러스터 숫자를 표시                        빌드 관리 페이지로 이동                        어플리케이션 맵 생성 페이지로 이동          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3/",
        "teaser":null},{
        "title": "3.1 어플리케이션 관리",
        "excerpt":" 어플리케이션 맵과 해당 워크로드그룹 및 워크로드를 관리한다.   ㅤㅤㅤㅤㅤ  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1/",
        "teaser":null},{
        "title": "3.1.1 어플리케이션 맵",
        "excerpt":"어플리케이션 구성 단위이다. 논리적 단위로 그룹을 구성하고 그룹 내에 워크로드를 배치한다. 맵을 구성하고 있는 클러스터의 미터링 정보를 확인하거나, 워크로드의 모니터링 정보를 확인 할 수 있다. 배포 작업을 생성해서 워크로드를 생성하거나 업데이트 할 수 있다. a) 서비스 → 어플리케이션 맵 선택하여 클릭한다. 목록 설명 논리적 단위로 구성된 그룹. 액션메뉴를 활성화하면 해당...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.1/",
        "teaser":null},{
        "title": "3.1.1-1 어플리케이션 맵 생성",
        "excerpt":" 서비스에 새로운 어플리케이션 맵을 생성 한다.   a) 서비스 → 서비스의 우측 + 버튼을 클릭한다.     b) 사용하고자 하는 클러스터를 선택하고, 맵 이름과 네임스페이스 이름을 지정하여 어플리케이션 맵을 생성한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.1.1/",
        "teaser":null},{
        "title": "3.1.1-2 어플리케이션 맵 이름변경",
        "excerpt":" 어플리케이션 맵의 이름을 변경한다.   a) 서비스 → 어플리케이션 맵의 우측 ✎ 버튼을 클릭한다.     b) 활성화된 이름 입력란에 내용을 변경 후, Enter 키를 눌러 어플리케이션 맵의 이름을 변경한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.1.2/",
        "teaser":null},{
        "title": "3.1.1-3 어플리케이션 맵 삭제",
        "excerpt":" 어플리케이션 맵을 삭제하는 기능이다. 어플리케이션 맵을 삭제하기 위해서는 배포 중인 워크로드가 없어야 한다.   a) 서비스 → 어플리케이션 맵 선택 → 어플리케이션 맵 삭제를 클릭한다.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.1.3/",
        "teaser":null},{
        "title": "3.1.2 그룹 관리",
        "excerpt":"워크로드에 대하여 그룹으로 관리한다. 해당 그룹에 워크로드를 생성할 수 있다. 그룹명을 변경하거나, 그룹 추가, 이동, 삭제, 컬럼수 변경이 가능하다. a) 서비스 → 어플리케이션 맵 선택 → 워크로드 그룹의 ▼(액션 버튼) 클릭하여 메뉴를 활성화한다. 목록 설명 그룹명 변경 그룹명을 변경 컬럼수 변경 컬럼수를 변경(최소:1~최대:8) 왼쪽으로 이동 그룹을 왼쪽으로 이동 오른쪽으로 이동...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.2/",
        "teaser":null},{
        "title": "3.1.3 워크로드",
        "excerpt":" 어플리케이션을 구성하는 최소 단위이다. 1개의 워크로드가 어플리케이션이 될 수도 있고, 여러개의 워크로드가 하나의 어플리케이션을 구성 할 수 있다.   a) 서비스 → 어플리케이션 맵 선택하면 맵안에 구성된 워크로드들을 볼 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3/",
        "teaser":null},{
        "title": "3.1.3-1 워크로드 생성",
        "excerpt":"그룹관리에서 워크로드를 생성하고 실행한다. a) 서비스 → 어플리케이션 맵 선택 → 워크로드 그룹 + 버튼(워크로드 생성)을 클릭한다. 워크로드 유형을 선택 한다. b) 기본정보, 컨테이너, 인스턴스, 업데이트 정책, 서비스 포트, 볼륨 내용을 작성하고 생성버튼을 눌러 워크로드를 생성한다. 워크로드 기본 정보 정의 항목 설명 이름 생성하는 워크로드의 이름 그룹 워크로드가 생성되는 워크로드...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.1/",
        "teaser":null},{
        "title": "3.1.3-2 워크로드 편집",
        "excerpt":"Running 또는 Stopped 상태의 워크로드를 편집하고 재배포 한다. a) 서비스 → 어플리케이션 맵 선택 → 워크로드를 클릭한다. b) 기본정보, 컨테이너, 인스턴스, 업데이트 정책, 서비스 포트, 볼륨 내용을 편집하고 수정버튼을 눌러 워크로드를 재배포 한다. 워크로드 Running 중이라면 워크로드유형과 컨테이너의 이미지 변경이 불가능. 단, 컨테이너 이미지태그 변경은 가능. 이를 변경하기 위해서는 워크로드...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.2/",
        "teaser":null},{
        "title": "3.1.3-3 워크로드 인스턴스 정보 조회",
        "excerpt":"워크로드 인스턴스의 정보를 조회 할 수 있다. 인스턴스 정보 Pods 상세 정보, 상태 정보, 이벤트 정보, 배포 정보, 웹터미널(컨테이너), 로그(컨테이너) Services 상세 정보, 이벤트 정보, 배포 정보 Persistent Volume Claims 상세 정보, 볼륨 상세 정보, 배포 정보 Deployments 상세 정보, 이벤트 정보, 배포 정보, 오토스케일러 정보(옵션) Replica Sets 상세 정보,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.3/",
        "teaser":null},{
        "title": "3.1.3-4 워크로드 중지",
        "excerpt":" 배포된 워크로드를 중지한다. 워크로드를 중지하면 POD는 삭제된다.   a) 서비스 → 어플리케이션 맵 선택 → Running 상태의 워크로드 액션메뉴를 클릭(활성화) → 중지를 클릭한다.   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.4/",
        "teaser":null},{
        "title": "3.1.3-5 워크로드 시작",
        "excerpt":" 중지된 워크로드를 시작한다.   a) 서비스 → 어플리케이션 맵 선택 → Stopped 상태의 워크로드 액션메뉴를 클릭(활성화) → 시작을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.5/",
        "teaser":null},{
        "title": "3.1.3-6 워크로드 재시작",
        "excerpt":" 워크로드를 재시작한다. 컴퓨터의 Rebooting과 같은 개념이다.   a) 서비스 → 어플리케이션 맵 선택 → Running 상태의 워크로드 액션메뉴를 클릭(활성화) → 재시작을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.6/",
        "teaser":null},{
        "title": "3.1.3-7 워크로드 제거",
        "excerpt":" 중지된 워크로드를 제거한다.   a) 서비스 → 어플리케이션 맵 선택 → Stopped 상태의 워크로드 액션메뉴를 클릭(활성화) → 제거를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.3.7/",
        "teaser":null},{
        "title": "3.1.4 모니터링",
        "excerpt":" 워크로드, POD, Container 별로 사용 중인 CPU, Memory, Network 사용량에 대하여 조회 할 수 있다.   a)    서비스 → 어플리케이션 맵 선택 → 모니터링을 클릭한다.      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.4/",
        "teaser":null},{
        "title": "3.1.5 파이프라인",
        "excerpt":"파이프라인 기능을 통해 이미지 빌드 작업부터 워크로드 배포작업까지 한 번에 진행 할 수 있다. 또한 배포 중인 워크로드의 이미지 버전을 변경하여 재배포 할 수 있다. a) 서비스 → 어플리케이션 맵 선택 → 파이프라인을 클릭한다. 파이프라인 메뉴 설명 일괄 실행 파이프라인 작업들을 일괄적으로 실행 실행 해당 파이프라인 작업을 실행 이미지 메뉴...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.5/",
        "teaser":null},{
        "title": "3.1.6 퍼시스턴트 볼륨",
        "excerpt":"퍼시스턴트 볼륨 현황 및 생성,삭제를 제공한다. a) 서비스 → 어플리케이션 맵 → 퍼시스턴트 볼륨 항목 설명 볼륨 이름 생성한 퍼시스턴트 볼륨 이름, 클릭 시 퍼시스턴트 볼륨 상세 화면으로 이동 볼륨 타입 볼륨 타입(Single, Shared) 상태 볼륨의 상태(Ready, Mounted) 사용량 사용량, 요청량, 총량 Age 볼륨 생성 경과 시간 Filter 검색을 통해...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.6/",
        "teaser":null},{
        "title": "3.1.6-1 퍼시스턴트 볼륨 생성",
        "excerpt":"퍼시스턴트 볼륨 생성 할 수 있다. a) 서비스 → 어플리케이션 맵 → 퍼시스턴트 볼륨 항목 설명 퍼시스턴트 볼륨 타입 볼륨 타입(Single, Shared) 스토리지 클러스터에 등록된 스토리지 목록 노출 엑세스 모드 퍼시스턴트 볼륨 타입이 Single일 경우 ReadWriteOnce, Shard일 경우 ReadWriteMany, ReadOnlyMany를 선택 이름 생성할 퍼시스턴트 볼륨의 이름 용량 생성할 퍼시스턴트 볼륨의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.6.1/",
        "teaser":null},{
        "title": "3.1.6-2 퍼시스턴트 볼륨 삭제",
        "excerpt":" 퍼시스턴트 볼륨을 삭제한다.   a) 서비스 → 어플리케이션 맵 → 퍼시스턴트 볼륨 → 퍼시스턴트 액션메뉴(활성화) → 삭제 클릭    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.6.2/",
        "teaser":null},{
        "title": "3.1.7 설정",
        "excerpt":" 어플리케이션 단위로 변수값을 key=value의 형태로 저장하여 볼륨처럼 사용 할 수 있다.   a) 서비스 → 어플리케이션 맵 선택 → 설정을 클릭한다.                    메뉴       설명                       컨피그 맵       컨피그 맵을 등록, 편집, 삭제 관리 메뉴                 시크릿       시크릿을 등록, 편집, 삭제 관리 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7/",
        "teaser":null},{
        "title": "3.1.7-1 컨피그 맵",
        "excerpt":" 서버에서 Config File을 Map 형식으로 저장하여 볼륨으로 사용 할 수 있다.   a) 서비스 → 어플리케이션 맵 선택 → 설정 → 컨피그 맵을 클릭한다.                    항목       설명                              컨피그 맵 추가 페이지로 이동                 이름       컨피그 맵 이름(사용자 지정)                 설명       컨피그 맵 설명(사용자 지정)                        컨피그 맵의 액션 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.1/",
        "teaser":null},{
        "title": "3.1.7-1a 컨피그 맵 추가",
        "excerpt":"서비스에 컨피그 맵을 추가한다. a) 서비스 → 어플리케이션 맵 선택 → 설정 → 컨피그 맵 → 컨피그 맵 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 데이터의 값을 입력하고 우측 상단 생성 버튼을 눌러 컨피그 맵을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 설명 컨피그 맵의 설명을 입력하는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.1a/",
        "teaser":null},{
        "title": "3.1.7-1b 컨피그 맵 수정",
        "excerpt":" 서비스에 추가 된 컨피그 맵의 데이터를 수정 할 수 있다.(이름 변경불가)   a) 서비스 → 어플리케이션 맵 선택 → 설정 → 컨피그 맵 → 컨피그 맵 액션메뉴(활성화) →  컨피그 맵 수정을 클릭     b) 데이터 값 변경 후, 수정 버튼을 클릭하여 컨피그 맵을 편집한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.1b/",
        "teaser":null},{
        "title": "3.1.7-1c 컨피그 맵 삭제",
        "excerpt":" 서비스에 컨피그 맵을 삭제한다.   a) 서비스 → 어플리케이션 맵 선택 → 설정 → 컨피그 맵 → 컨피그 맵 액션메뉴(활성화) →  컨피그 맵 삭제 클릭    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.1c/",
        "teaser":null},{
        "title": "3.1.7-2 시크릿",
        "excerpt":" 서버에서 Secret File로 저장하여 환경변수 및 볼륨으로 사용 할 수 있다.   a) 서비스 → 어플리케이션 맵 선택 → 설정 → 시크릿을 클릭한다.                    항목       설명                              시크릿 추가 페이지로 이동                 이름       시크릿 이름(사용자 지정)                 설명       시크릿 설명(사용자 지정)                        시크릿의 액션 메뉴          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.2/",
        "teaser":null},{
        "title": "3.1.7-2a 시크릿 추가",
        "excerpt":"서비스에 시크릿을 추가한다. a) 서비스 → 어플리케이션 맵 선택 → 설정 → 시크릿 → 시크릿 생성 버튼을 클릭하여 등록페이지로 이동한다. b) 이름과 데이터의 값을 입력하고 우측 상단 생성 버튼을 눌러 시크릿을 생성한다. 항목 설명 이름 이름을 입력하는 란입니다. 추후 편집이 불가 설명 시크릿의 설정의 설명 입력 란입니다. 데이터 추가 버튼...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.2a/",
        "teaser":null},{
        "title": "3.1.7-2b 시크릿 수정",
        "excerpt":" 서비스에 추가 된 시크릿의 데이터를 수정 할 수 있다.(이름 변경불가)   a) 서비스 → 어플리케이션 맵 선택 → 설정 → 시크릿 → 시크릿 액션메뉴(활성화) →  시크릿 수정을 클릭     b) 데이터 값 변경 후, 수정 버튼을 클릭하여 시크릿을 편집한다.(시크릿 값은 보안상 보여주지 않음)    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.2b/",
        "teaser":null},{
        "title": "3.1.7-2c 시크릿 삭제",
        "excerpt":" 서비스에 시크릿을 삭제한다.   a) 서비스 → 어플리케이션 맵 선택 → 설정 → 시크릿 → 시크릿 액션메뉴(활성화) →  시크릿 삭제를 클릭    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.1.7.2c/",
        "teaser":null},{
        "title": "3.2 빌드 관리",
        "excerpt":"도커(Docker) 이미지에 대한 빌드 작업을 관리한다. 어플리케이션을 다운로드, 소스 파일을 빌드, 이미지 파일을 빌드하여 Habor 레지스트리에 업로드한다. a) 서비스 → 빌드 관리 선택하여 클릭한다. 목록 설명 빌드 생성 버튼 빌드명 빌드의 이름 이미지명 저장된 도커 이미지 이름 이미지 사이즈 저장된 도커 이미지의 크기. MB단위로 표기 최근 액션 빌드의 상태를 표시...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2/",
        "teaser":null},{
        "title": "3.2.1 빌드 추가",
        "excerpt":"도커 이미지에 대한 빌드 작업을 추가한다. 어플리케이션 다운로드, 빌드, 이미지 빌드로 총 3가지를 선택 할 수 있다. a) 서비스 → 빌드 관리 → 빌드추가 선택하여 해당 페이지로 이동 b) 어플리케이션 다운로드, 어플리케이션 빌드, 이미지 빌드 내용을 작성하고 생성버튼을 눌러 서버를 생성 빌드 생성 단계 설명 어플리케이션 다운로드 빌드에 필요한 소스를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.1/",
        "teaser":null},{
        "title": "3.2.2 작업 설정 편집",
        "excerpt":"빌드 작업을 편집한다. 빌드명은 편집이 불가능다. 편집 안에서 기존에 다운로드한 소스를 제거 할 수 있고, 어플리케이션 다운로드, 어플리케이션 빌드, 이미지 빌드 각각 3가지 작업을 따로 실행 할 수 있다. a) 서비스 → 빌드 관리 → 빌드 액션 메뉴(활성화) → 작업 설정 편집을 선택하여 해당 페이지로 이동 작업설정편집 설명 소스폴더 삭제...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.2/",
        "teaser":null},{
        "title": "3.2.3 히스토리",
        "excerpt":"해당 빌드의 히스토리 페이지로 이동하여 빌드 실행 항목에 대하여 히스토리 정보를 볼 수 있다. 빌드 실행 단위로 로그를 확인할 수 있다. a) 서비스 → 빌드 관리 → 빌드 액션 메뉴(활성화) → 히스토리를 선택하여 해당 페이지로 이동 b) 빌드작업 히스토리 메뉴에서 해당 빌드 작업의 액션명, 상태, 날짜, 작업 시간, 이미지명, 이미지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.3/",
        "teaser":null},{
        "title": "3.2.4 빌드 실행",
        "excerpt":"빌드 작업을 실행한다. 빌드 실행을 하면, 어플리케이션 다운로드, 어플리케이션 빌드, 이미지 빌드를 한 번에 실행한다. a) 서비스 → 빌드 관리 → 빌드 액션 메뉴(활성화) → 빌드 실행을 선택하여 빌드작업을 실행 b) 빌드 실행 시, 현재 액션이 변경되면서 로그 창이 활성화 된다. 빌드생성시 체크박스에서 선택된 갯수 만큼 탭이 활성화되며, 각 단계별로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.4/",
        "teaser":null},{
        "title": "3.2.5 빌드 취소",
        "excerpt":" 빌드 작업을 취소한다. 빌드작업이 실행 상태(RUNNING)인 것만 취소할 수 있다.   a) 서비스 → 빌드 관리 → 빌드 액션 메뉴(활성화) → 빌드 취소를 선택하여 빌드 작업을 취소    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.5/",
        "teaser":null},{
        "title": "3.2.6 로그 보기",
        "excerpt":" 빌드작업의 최근 실행 로그를 보여준다. 빌드실행 도중이라면 실행중인 로그를 볼 수 있다.   a) 서비스 → 빌드 관리→ 빌드 액션 메뉴(활성화) → 로그 보기를 선택하여 해당 빌드 작업의 빌드 실행 로그를 볼 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.6/",
        "teaser":null},{
        "title": "3.2.7 작업 삭제",
        "excerpt":" 빌드 작업을 삭제한다. 삭제 시 해당 캐시와 다운받은 소스 폴더를 삭제 후, 작업을 삭제한다.   a) 서비스 → 빌드 관리 → 빌드 액션 메뉴(활성화) → 작업 삭제를 선택하여 해당 빌드 작업을 삭제할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/3.2.7/",
        "teaser":null},{
        "title": "4.카탈로그",
        "excerpt":"어플리케이션 구성을 템플릿화하여 쉽게 워크로드 생성 및 배포, 관리가 가능한 기능이다. 여러 워크로드들을 한 번에 묶어 사용하고자 하는 경우 카탈로그 기능을 사용한다. 카탈로그는 서비스 카탈로그와 플랫폼 카탈로그로 구분된다. 카탈로그 메뉴 설명 서비스 카탈로그 사용자가 생성한 카탈로그 플렛폼 카탈로그 청지윈 기본 제공 공식 카탈로그 Filter Catalog 검색을 통해 필요한 템플릿 조회...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4/",
        "teaser":null},{
        "title": "4.1 카탈로그 저장",
        "excerpt":"카탈로그를 생성하여 필요한 서버들을 묶어 한 번에 배포 할 수 있다. 워크로드 컨테이너 이미지가 빌드 인 경우에는 이미지만을 저장하여 공용이미지로 변환하여 카탈로그로 저장한다. 저장된 카탈로그는 서비스 카탈로그에서 확인 할 수 있다. 카탈로그 저장시 설정의 컨피그 맵, 시크릿도 템플릿으로 저장한다. (단, 시크릿은 보안상 값은 저장하지 않는다.) a) 서비스에서 카탈로그로 저장하는 어플리케이션...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.1/",
        "teaser":null},{
        "title": "4.2 카탈로그 배포",
        "excerpt":"생성된 카탈로그를 배포할 수 있다. 필요 시 불필요한 인스턴스를 제외하거나 편집하여 배포 가능하다. a) 카탈로그 → 배포하고자 하는 템플릿의 ‘배포’ 버튼을 클릭 b) 템플릿 카테고리에서 서비스, 클러스터, 어플리케이션 맵 선택 후 ‘배포’ 클릭. 원하지 않는 인스턴스는 제외하고 배포할 수 있다. 신규 Application Map 배포 시 서비스, 클러스터를 선택하고 어플리케이션 맵,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.2/",
        "teaser":null},{
        "title": "4.3 카탈로그 편집",
        "excerpt":"생성한 카탈로그 내용을 편집할 수 있다. 템플릿의 버전, 요약정보, 편집 내용을 수정할 수 있으며 각 인스턴스의 배포 정보를 수정할 수 있다. a) 카탈로그 → 편집하고자 하는 템플릿 ‘편집’ 버튼을 클릭 b) 수정할 템플릿의 버전, 요약정보, 편집 내용을 수정하고, 화면 우측 하단 ‘편집’버튼 클릭하여 인스턴스의 배포 정보를 수정할 수 있다. c)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.3/",
        "teaser":null},{
        "title": "4.4 카탈로그 삭제",
        "excerpt":" 불필요한 카탈로그를 삭제할 수 있다. (칵테일 카탈로그는 삭제 불가)   a) 카탈로그 → 삭제하고자 하는 템플릿 ‘편집’ 버튼을 클릭     b) 삭제할 템플릿의 버전을 선택 후, ‘삭제’ 버튼을 클릭한다. 해당 템플릿 버전에 대하여 삭제된다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/4.4/",
        "teaser":null},{
        "title": "5.클러스터",
        "excerpt":"클러스터의 등록관리와 노드와 어플리케이션 단위의 모니터링, 볼륨, 알람, 미터링 서비스가 제공된다. 클러스터 메뉴 설명 노드 전체 노드의 CPU, Memory, Network 사용량 및 개별 노드의 모니터링 서비스 어플리케이션 전체 어플리케이션의 CPU, Memory, Network 사용량 및 개별 어플리케이션의 모니터링 서비스 볼륨 스토리지 관리 및 볼륨 현황 알람 클러스터의 이벤트 정보 관련 알람...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5/",
        "teaser":null},{
        "title": "5.1 클러스터 관리",
        "excerpt":"프로바이더로 부터 할당받은 Kubernetes 클러스터 정보를 등록, 편집, 삭제하는 기능이다. a) 클러스터 → 정렬 버튼을 클릭하여 원하시는 정렬기준을 선택한다. 클러스터 설정 설명 + 클러스터 등록 클러스터 추가 페이지로 이동 클러스터 클러스터 종류 노드 클러스터의 노드 숫자 CPU 클러스터의 전체 CPU 용량, 요청량, 사용량 메모리 클러스터의 전체 메모리 용량, 요청량, 사용량...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.1/",
        "teaser":null},{
        "title": "5.1.1 클러스터 추가",
        "excerpt":"클러스터를 추가 등록할 수 있는 기능이다. a) 클러스터 → 오른쪽 상단 + 모양의 버튼을 클릭한다. b) 기본 정보(이름, k8s 버전, 설명)를 입력한다. 기본 정보 설명 이름 등록할 클러스터의 이름 k8s 버전 클러스터에 설치된 Kubernetes의 버전정보. e.g) 1.8.13 아이디 클러스터 고유 아이디(사용자 지정), 알람 메시지 Redirect시 필요 설명 클러스터에 대한 사용자...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.1.1/",
        "teaser":null},{
        "title": "5.1.2 클러스터 편집",
        "excerpt":" 클러스터의 기본정보, 프로바이더, 모니터링, 클러스터 유형을 수정하는 기능이다. 프로바이더의 계정, 유형, 리전은 변경할 수 없다.   a) 클러스터 → 클러스터 선택 → 등록관리 → 수정버튼 → 수정 완료 후 저장버튼을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.1.2/",
        "teaser":null},{
        "title": "5.1.3 클러스터 삭제",
        "excerpt":" 클러스터 정보를 삭제하는 기능이다. 해당 클러스터를 사용하고 있는 어플리케이션 맵이 있을 경우 삭제할 수 없다.   a) 클러스터 → 클러스터 선택 → 등록관리 → 삭제버튼을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.1.3/",
        "teaser":null},{
        "title": "5.2 노드",
        "excerpt":" 전체 노드의 총 Disk, CPU, Memory, Network 사용량과 개별 노드의 라벨, 상태정보 등을 조회할 수 있는 화면이다. 노드 명을 클릭하면 노드 상세 정보를 조회 할 수 있다.   a) 클러스터 → 클러스터 선택 → 노드를 클릭한다.     b) 노드명을 클릭하여 노드 상세 정보를 확인할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.2/",
        "teaser":null},{
        "title": "5.3 어플리케이션",
        "excerpt":" 전체 어플리케이션의 총 CPU, Memory, Network 사용량과 개별 어플리케이션의 네임스페이스, 인스턴스 현황 등을 조회 할 수 있는 화면이다. 어플리케이션 명을 클릭하면 해당 어플리케이션 맵 페이지로 이동할 수 있다.   a) 클러스터 → 클러스터 선택 → 어플리케이션을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.3/",
        "teaser":null},{
        "title": "5.4 볼륨",
        "excerpt":"Public Cloud 스토리지 및 외부 스토리지 정보를 등록하고, 볼륨 현황에 대한 모니터링 서비스를 제공한다. a) 클러스터 → 클러스터 선택 → 볼륨을 클릭한다. 스토리지 설정 정보 설명 + 버튼 스토리지 추가 페이지로 이동 이름 스토리지 이름(사용자지정) 타입 스토리지 종류(NFS/EBS/Google Persistent Disk/Azure Disk) 스토리지 클래스 이름 k8s에 등록된 Class Name 정책 스토리지...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.4/",
        "teaser":null},{
        "title": "5.4.1 스토리지 추가",
        "excerpt":"볼륨을 추가하여 사용 할 수 있다. a) 클러스터 → 클러스터 선택. b) 클러스터 상세화면에서 볼륨 선택 c) 클러스터, 이름, 설명, 스토리지 플러그인, 정책, 스토리지 클래스 이름을 차례로 기입한다. 스토리지 등록 정보 설명 이름 PV 이름 설명 PV 사용자 설명 유형 스리지 유형 (Single, Shared) 스토리지 플러그인 스토리지 종류(NFS, NFS Named,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.4.1/",
        "teaser":null},{
        "title": "5.4.2 스토리지 편집",
        "excerpt":" 등록된 스토리지 정보를 편집하는 기능이다. 단, NFS Named 타입의 스토리지는 편집할 수 없다.   a) 클러스터 → 클러스터 선택 → 볼륨 → 볼륨 액션 버튼 → 스토리지 편집을 클릭한다.     b) 이름, 설명, 정책, 스토리지 클래스 이름, 파라미터값을 수정 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.4.2/",
        "teaser":null},{
        "title": "5.4.3 스토리지 삭제",
        "excerpt":" 등록된 스토리지 정보를 삭제하는 기능이다.   a) 클러스터 → 클러스터 선택 → 볼륨 → 볼륨 액션버튼 → 볼륨 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.4.3/",
        "teaser":null},{
        "title": "5.5 알람",
        "excerpt":" 클러스터에 대한 이벤트를 알람으로 받을 수 있다.   a) 클러스터 → 클러스터 선택 → 알람을 클릭한다.     b) 알람 명 클릭 시 상세 내용을 확인 할 수 있다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.5/",
        "teaser":null},{
        "title": "5.5.1 알람 목록",
        "excerpt":"알람은 다음 목록에서 발생 조건이 지속 시간 만큼 계속될 경우 발생한다. AlertManager 알람 ID ALM-001 중요도 warning 알람 이름 AlertmanagerDown 지속 시간 5분 발생 조건 Alertmanager 메트릭 수집이 안 될 경우 발생 조치 사항 Prometheus의 로그 및 Alertmanager의 로그와 이벤트를 확인한다. 필요할 경우, Pod를 재시작한다. 알람 ID ALM-002 중요도 warning...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.5.1/",
        "teaser":null},{
        "title": "5.6 미터링",
        "excerpt":" 사용 중인 클러스터별 미터링(요금)에 대한 모니터링 서비스를 제공한다.   미터링 서비스는 Public Cloud 중 AWS와 GCP에만 적용되는 서비스이다.   a) 클러스터 → 클러스터 선택 → 미터링을 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/5.6/",
        "teaser":null},{
        "title": "6.대시보드",
        "excerpt":"대시보드에서는 청지윈에 서비스된 정보를 한 눈에 확인 할 수 있다. 요약정보 현재 등록 관리되고 있는 어플리케이션 개수, 워크로드 개수, 등록된 클러스터 수, 현재 발생한 알람의 개수를 볼 수 있다. 자원현황 CPU, Memory의 전체량, 요청량, 사용량과 Storage(Node, Pv) 전체, 사용량을 확인 할 수 있다. 공급자 별 클러스터 현황 공급자 별 등록된...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6/",
        "teaser":null},{
        "title": "6.1 사용자 관리",
        "excerpt":"현재 사용자의 정보 확인 및 관리 할 수 있다. a) 대시보드 -&gt; 페이지 왼쪽 하단 사용자 모양 버튼을 클릭 목록 설명 ID 현재 사용중인 계정의 ID를 확인할 수 있다. 사용자 언어 선택 Korean, Japanese, English 중 언어를 선택할 수 있다. 테마 Light와 Dark 테마 변경할 수 있다. 비밀번호 변경 기존...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.1/",
        "teaser":null},{
        "title": "7.용어 설명",
        "excerpt":" 청지윈 활용의 이해를 돕기 위한 Kubernetes 및 청지원 용어 정리이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7/",
        "teaser":null},{
        "title": "7.1 Kubernetes(k8s)",
        "excerpt":"1.Cluster 용어 설명 Namespace k8s의 가상 클러스터로 사용자들이 여러팀 또는 프로젝트로 분산되어 작업 할 수 있는 별도의 환경 Nodes k8s의 클러스터링되어 있는 어플리케이션을 구동하는 물리서버 또는 VM Persistent Volumes(PV) 외부 저장소. NFS, iSCSI, 클라우드에서 제공하는 스토리지 시스템을 지원 Roles 사용의 따라 권한을 부여. Storage Classes PV를 동적으로 Provisioning 할 경우,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.1/",
        "teaser":null},{
        "title": "7.2 청지윈",
        "excerpt":"1.환경설정 청지윈을 이용하기 위해서 사전에 정보를 등록하는 서비스 용어 설명 사용자 청지윈을 이용하기 위한 사용자 관리를 지원 계정 k8s Cluster에 대한 사용자 인증 정보에 대한 관리를 지원 서비스 업무 또는 프로젝트 단위로 작업을 분산하여 관리. 관리자는 일반사용자에 대하여 서비스 단위로 접근권한을 부여할 수 있다. C.클러스터 : k8s를 사용하기 위한 k8s정보를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.2/",
        "teaser":null},{
        "title": "7.3 청지윈 System Error Code",
        "excerpt":"1. 에러 코드 코드 메시지 CCCM001 구체적 오류 번호를 밝힐 수 없음. CCCM002 알수 없는 오류 입니다 CCCM004 잘못된 함수 호출 인자입니다 CCCM005 인증되지 않은 요청입니다 CCCM006 전달된 정보가 올바르지 않습니다 CCCM007 서버, 작업 등이 올바르지 않거나 요청을 처리할 수 없습니다 CCCM019 내부 서버 오류 CCCM020 외부 호출 API가 오류를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.3/",
        "teaser":null},{
        "title": "8.고객지원 서비스",
        "excerpt":"청지윈을 이용해 주셔서 감사합니다. 제품 구매 기능상담 등의 기술 지원 서비스 및 각종 혜택을 받을 수 있습니다. 제공하는 각종 서비스는 다음과 같습니다. 방문 서비스를 통하여 Q&amp;A, 제품에 관한 정보 및 기타 문의를 할 수 있습니다. 고객 등록을 마친 제품과 상담이 가능한 제품에 한하여 전화나 팩스를 통하여 전문 기술상담 서비스를 받을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8/",
        "teaser":null},]
