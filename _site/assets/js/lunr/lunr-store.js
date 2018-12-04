var store = [{
        "title": "What is Cocktail?",
        "excerpt":"Cocktail is an all-in-one container management platform. As the use of cloud computing became widespread, there has been a growing demand for infrastructure and application service management. This can be attributed to the limitations in utilizing the advantages of the cloud with past development and operations methods. In the applications...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.0/",
        "teaser":null},{
        "title": "Cocktail Structure Overview",
        "excerpt":"Cocktail is comprised of five layers that correspond to its various roles. Cluster Management Layer: Responsible for infrastructure (cluster), where containers are deployed/executed, and orchestration. Kubernetes (https://kubernetes.io) handles orchestration and provides scaling management functions such as infrastructure management and monitoring. Service Management Layer: Responsible for container configuration and management based...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.1/",
        "teaser":null},{
        "title": "Cluster Management Layer",
        "excerpt":"The cluster management layer is divided into the infrastructure, which consists of clusters, and the container orchestration engine. The detailed configuration is as follows: Cocktail automatically provisions the cluster infrastructure and orchestration engine according to user configuration. The tool responsible for this is Cube. Cube constitutes high-availability (HA) Kubernetes clusters....","categories": [],
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
        "excerpt":"The dashboard layer provides service status, monitoring, and cluster status information via a web-based UI. The dashboard provides role-specific views according to user privileges. Cocktail user privileges are as follows: Administrator : The admin manages clusters and has administrative privileges on all Cocktail services. DevOps : A DevOps user has...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/0.6/",
        "teaser":null},{
        "title": "1.Login",
        "excerpt":"Below is the initial Cocktail login screen. You can log in after entering the role, ID, and password. (Contact the administrator for ID information.) The password must be changed when first connecting or initializing the password. You can change your password or extend your password even after 90 days have...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/1/",
        "teaser":null},{
        "title": "2.Environment Settings",
        "excerpt":"  Environment settings allow user, account, and service management required to use Cocktail.                  Environment       Description                       User       Cocktail user                 Account       Public/private cloud account information to be used as a cloud resource                 Service       Workspace that can build, deploy, and operate applications          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/2/",
        "teaser":null},{
        "title": "2.1 Users",
        "excerpt":"The user account list can be filtered by All, Active, or Inactive. (‘Y’ and ‘N’ accounts are displayed when ‘Active’ and ‘Inactive’ are selected, respectively.) Cocktail user accounts can be created, edited, and deleted, and ADMIN and DEVOPS privileges can be granted according to the account. a) Configuration → User...","categories": [],
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
        "excerpt":"The dashboard allows you to view Cocktail service information at a glance. Summary Displays the number of currently-registered/managed applications, workloads clusters, and the total cloud cost for the current month. Resource Status You can check the total amount of CPU, memory, requested amount, usage, storage (Node, Pv) and usage. Cluster...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6/",
        "teaser":null},{
        "title": "6.1 User Management",
        "excerpt":"This feature allows you to view and manage current user information. a) Dashboard → Click the [User] button in the bottom-left corner Item Description ID ID of account currently in use User Language Choose from Korean, Japanese, and English Theme Choose between light and dark themes Change Password A new...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/6.1/",
        "teaser":null},{
        "title": "7.Glossary",
        "excerpt":"  The following section provides a list of common Kubernetes and Cocktail terminologies and explanations.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7/",
        "teaser":null},{
        "title": "7.1 Kubernetes(k8s)",
        "excerpt":"1.Cluster Term Description Namespace A separate environment in which users across multiple teams or projects can work in virtual k8s clusters Nodes A physical server or VM running clustered k8s applications Persistent Volumes(PV) External storage; Supports NFS, iSCSI, and cloud storage systems Roles Grants permissions according to usage case. Storage...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.1/",
        "teaser":null},{
        "title": "7.2 Cocktail",
        "excerpt":"1.Environment Settings Service for pre-registering information to use Cocktail Term Description User User management for use of Cocktail Account Management of user credentials for k8s clusters Service Distributes and manages tasks on a job or project basis. The administrator may grant access privileges to general users on a service basis...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.2/",
        "teaser":null},{
        "title": "7.3 Cocktail System Error Code",
        "excerpt":"1. Error Code Code Message CCCM001 Can not reveal specific error number. CCCM002 Unknown error CCCM004 Invalid function call argument CCCM005 Unauthorized request CCCM006 The information passed is not correct CCCM007 Server, job, etc. are not correct or can not process request CCCM019 Internal server error CCCM020 External call API...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/7.3/",
        "teaser":null},{
        "title": "8.Customer Support",
        "excerpt":"Thank you for using Cocktail. Contact us for technical support and product purchase consultations. We provide the following services: On-site Q&amp;A and product consultation services. Professional technical consultations via telephone or fax. (Limited to customers who have registered their products) Various event invitations and information. Support Email: byoungoh.lee@namutech.co.kr Product Developer...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/en/8/",
        "teaser":null},{
        "title": "层积云",
        "excerpt":"                                                                                                                                    한국어 메뉴얼                                                                                                      Learn More                                                                                                                                                           中文手册                                                                                                      Learn More                                                                                                                                                           English Menual                                                                                                      Learn More                                       ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/",
        "teaser":null},{
        "title": "Cocktail Cloud이 란?",
        "excerpt":"Cocktail Cloud은 올인원 컨테이너 관리 플랫폼(All-in-one Container Management Platform)이다. 클라우드 사용이 보편화 되면서, 인프라 뿐 아니라 어플리케이션, 서비스 관리에 대한 요구가 높아지고 있다. 과거와 같은 개발, 운영 방식으로는 클라우드의 장점을 활용하기에 한계가 있기 때문이다. 특히 어플리케이션 영역에서는 지속적인 통합 및 배포(Continuous Integration/Deploy, CI/CD), 마이그레이션(Migration), 멀티/하이브리드 클라우드 구축 등 자동화, 효율화,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.0/",
        "teaser":null},{
        "title": "Cocktail Cloud 구성 개요",
        "excerpt":"Cocktail Cloud은 그 역할에 따라 5개의 레이어로 구성된다. Cluster Management Layer: 컨테이너가 배포/실행되는 인프라(클러스터)와 오케스트레이션(Orchestration)을 담당하는 레이어다. 오케스트레이션은 Kubernetes(https://kubernetes.io)가 담당하고 인프라 관리, 모니터링 등 확장 관리 기능을 제공한다. Service Management Layer: 서비스(Workload)를 기준으로 컨테이너 구성과 관리를 담당하는 레이어다. 서비스를 구성하는 다수의 컨테이너와 관련 객체를 패키징하고 그 수명주기와 모니터링을 관리한다. Pipeline:...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.1/",
        "teaser":null},{
        "title": "Cluster Management Layer (클러스터 관리 레이어)",
        "excerpt":"클러스터 관리 레이어는 클러스터를 구성하는 인프라 스트럭처와 컨테이너 오케스트레이션 엔진 부분으로 구분된다. 상세 구성은 아래 그림과 같다. Cocktail Cloud은 클러스터 인프라와 오케스트레이션 엔진을 사용자의 설정에 따라 자동 프로비져닝(Provisioning)하는데 이를 담당하는 도구가CUBE이다. CUBE는 고가용(High Availability, HA)의 Kubernetes클러스터를 구성한다. CUBE가 프로비져닝하는 클러스터 구성은 높은 안정성과 보안, 확장성을 제공한다.(이를 CUBE클러스터라 한다.) CUBE클러스터는 현재...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.2/",
        "teaser":null},{
        "title": "Service Management Layer (서비스 관리 레이어)",
        "excerpt":"일반적으로 하나의 어플리케이션 및 서비스는 다수의 컨테이너로 구성된다. 특히 Kubernetes와 같은 오케스트레이션 엔진의 경우 컨테이너 외에도 서비스 포트, 컨트롤러, 볼륨등의 추가적인 객체를 필요로 한다. 따라서 컨테이너 기반의 어플리케이션 및 서비스를 관리하기 위해서는 컨테이너와 관련 객체를 패키징하고 관리하는 추상화 단위가 필요하다. 서비스 관리 레이어는 이를 담당하는 레이어다. Cocktail Cloud의 서비스 관리는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.3/",
        "teaser":null},{
        "title": "Pipeline Layer (파이프라인 레이어)",
        "excerpt":"파이프라인 레이어는 코드로부터 컨테이너 빌드와 배포를 자동화 한다. Build는 코드 다운로드, 코드 빌드 및 테스트등 작업(Task), 컨테이너 이미지 빌드를 사용자 설정을 기준으로 순차적으로 수행한다. 작업(Task)은 내부에서 작업을 수행하는 컨테이너를 사용하는데, 기본 제공되는 컨테이너 외에도 공개 또는 사용자가 만든 컨테이너를 사용하여 확장 할 수 있다. 빌드 된 이미지는 Cocktail Cloud 서버의...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.4/",
        "teaser":null},{
        "title": "Catalog Layer (카탈로그 레이어)",
        "excerpt":"컨테이너는 그 구성을 이미지화하여 배포 실행한다. 따라서 자주 사용하는 DB나 미들웨어 등의 런타임은 컨테이너 이미지와 배포 정보를 템플릿화 하면 반복적인 작업을 줄이고 언제든 필요할 때 쉽게 배포하여 사용 할 수 있다. 이러한 템플릿을 생성하고 관리를 담당하는 레이어가 카탈로그다. 카탈로그 레이어의 구성을 도식화하면 아래와 같다. 카탈로그는 목적에 따라 두 가지 형태로...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.5/",
        "teaser":null},{
        "title": "Dashboard Layer (대시보드 레이어)",
        "excerpt":"Cocktail Cloud의 대시보드 레이어는 서비스 현황, 모니터링, 클러스터 현황 등을 웹UI형태로 제공한다. 대시보드는 사용자의 역할에 맞는 뷰를 권한에 따라 제공한다. Cocktail Cloud의 사용자 권한은 다음과 같다. Administrator(Admin) : 클러스터 관리를 수행하고, Cocktail Cloud의 모든 서비스에 대해 관리 권한을 가진다. DevOps : 할당된 하나 이상의 서비스에 대해서만 관리 권한을 가진다. 대시보드는...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/0.6/",
        "teaser":null},{
        "title": "1. 로그인",
        "excerpt":" 아래는 Cocktail Cloud의 초기 로그인 화면이다.   Role, ID, Password 입력 후 로그인 할 수 있다.   (아이디는 관리자에게 별도 문의)      최초 접속 또는 비밀번호 초기화시에는 반드시 비밀번호를 변경 해야한다.      기간이 90일이 경과한 경우에도 비밀번호를 변경하거나 비밀번호를 연장 할 수 있다.     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/1/",
        "teaser":null},{
        "title": "2.환경 설정",
        "excerpt":" 환경설정을 통해 층적 이용에 필요한 사용자, 계정, 서비스 관리를 할 수 있다.                     환경 설정 메뉴       설명                       사용자       Cocktail Cloud을 사용하는 유저                 계정       Cloud 리소스로 사용 할 Public/Private 클라우드 계정 정보                 서비스       어플리케이션을 빌드 및 배포, 운영 할 수 있는 Workspace          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2/",
        "teaser":null},{
        "title": "2.1 사용자",
        "excerpt":"사용자 계정 목록을 전체/사용/미사용으로 분류하여 조회할 수 있다.(사용여부가 Y인 계정은 ‘사용’, N인 계정은 ‘미사용’ 선택 시 표시) Cocktail Cloud 사용자 계정을 생성 및 수정, 삭제할 수 있으며 계정에 따라 ADMIN, DEVOPS 권한을 줄 수 있다. a) 환경설정 → 사용자 → 사용여부 버튼을 클릭하여 ‘전체/사용/미사용’ 중 하나를 선택한다. 사용자 설정 사용자...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1/",
        "teaser":null},{
        "title": "2.1.1 사용자 추가",
        "excerpt":"Cocktail Cloud 사용자 추가 기능이다. 사용자 아이디는 반드시 이메일 형식( user@example.com )이어야 하며 패스워드 설정기능은 현재 지원하고 있지 않으니 아이디 생성 후에는 반드시 비밀번호 초기화 후 변경하여 사용해야 한다. (초기화 후 제공받는 초기 비밀번호는 ‘Pass0000’이다.) a) 환경설정 → 사용자 → 우측상단 사용자 생성 버튼 클릭한다. b) 사용자 아이디, 이름, 권한을...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 사용자 편집",
        "excerpt":" Cocktail Cloud 사용자 정보를 편집 하는 기능 이다.   a) 환경설정 → 사용자 → 사용자 액션 메뉴 → 사용자 편집 → 수정완료 후 수정버튼을 클릭한다.     b) 사용자 아이디를 제외한 이름, 상태 및 권한 수정이 가능하다.                    상태       설명                       Active       사용자 활성화                 Inactive       사용자 비활성          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 사용자 삭제",
        "excerpt":" 사용자 계정을 삭제하는 기능이다. 삭제된 계정은 목록에서 제거되는 것이 아닌  Y or N 으로 활성화/비활성화 표기된다.   사용자 편집에서 상태를 Active로 변경하면 해당 아이디를 재사용할 수 있다.   a) 환경설정 → 사용자 → 사용자 액션 메뉴 → 사용자 삭제를 클릭한다.    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 사용자 비밀번호 초기화",
        "excerpt":" Cocktail Cloud 사용자 비밀번호를 초기화 하는 기능이다.(초기화 후 제공받는 초기 비밀번호는 ‘Pass0000’이다.)   a) 환경설정 → 사용자 → 사용자 액션 메뉴 → 사용자 비밀번호 초기화를 클릭한다.    ","categories": [],
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
        "excerpt":"어플리케이션 구성을 템플릿화하여 쉽게 워크로드 생성 및 배포, 관리가 가능한 기능이다. 여러 워크로드들을 한 번에 묶어 사용하고자 하는 경우 카탈로그 기능을 사용한다. 카탈로그는 서비스 카탈로그와 플랫폼 카탈로그로 구분된다. 카탈로그 메뉴 설명 서비스 카탈로그 사용자가 생성한 카탈로그 플렛폼 카탈로그 Cocktail Cloud 기본 제공 공식 카탈로그 Filter Catalog 검색을 통해 필요한 템플릿...","categories": [],
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
        "excerpt":"대시보드에서는 Cocktail Cloud에 서비스된 정보를 한 눈에 확인 할 수 있다. 요약정보 현재 등록 관리되고 있는 어플리케이션 개수, 워크로드 개수, 등록된 클러스터 수, 현재 발생한 알람의 개수를 볼 수 있다. 자원현황 CPU, Memory의 전체량, 요청량, 사용량과 Storage(Node, Pv) 전체, 사용량을 확인 할 수 있다. 공급자 별 클러스터 현황 공급자 별...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6/",
        "teaser":null},{
        "title": "6.1 사용자 관리",
        "excerpt":"현재 사용자의 정보 확인 및 관리 할 수 있다. a) 대시보드 -&gt; 페이지 왼쪽 하단 사용자 모양 버튼을 클릭 목록 설명 ID 현재 사용중인 계정의 ID를 확인할 수 있다. 사용자 언어 선택 Korean, Japanese, English 중 언어를 선택할 수 있다. 테마 Light와 Dark 테마 변경할 수 있다. 비밀번호 변경 기존...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/6.1/",
        "teaser":null},{
        "title": "7.용어 설명",
        "excerpt":" Cocktail Cloud 활용의 이해를 돕기 위한 Kubernetes 및 청지원 용어 정리이다.  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7/",
        "teaser":null},{
        "title": "7.1 Kubernetes(k8s)",
        "excerpt":"1.Cluster 용어 설명 Namespace k8s의 가상 클러스터로 사용자들이 여러팀 또는 프로젝트로 분산되어 작업 할 수 있는 별도의 환경 Nodes k8s의 클러스터링되어 있는 어플리케이션을 구동하는 물리서버 또는 VM Persistent Volumes(PV) 외부 저장소. NFS, iSCSI, 클라우드에서 제공하는 스토리지 시스템을 지원 Roles 사용의 따라 권한을 부여. Storage Classes PV를 동적으로 Provisioning 할 경우,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.1/",
        "teaser":null},{
        "title": "7.2 Cocktail Cloud",
        "excerpt":"1.환경설정 Cocktail Cloud을 이용하기 위해서 사전에 정보를 등록하는 서비스 용어 설명 사용자 Cocktail Cloud을 이용하기 위한 사용자 관리를 지원 계정 k8s Cluster에 대한 사용자 인증 정보에 대한 관리를 지원 서비스 업무 또는 프로젝트 단위로 작업을 분산하여 관리. 관리자는 일반사용자에 대하여 서비스 단위로 접근권한을 부여할 수 있다. C.클러스터 : k8s를 사용하기...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.2/",
        "teaser":null},{
        "title": "7.3 Cocktail Cloud System Error Code",
        "excerpt":"1. 에러 코드 코드 메시지 CCCM001 구체적 오류 번호를 밝힐 수 없음. CCCM002 알수 없는 오류 입니다 CCCM004 잘못된 함수 호출 인자입니다 CCCM005 인증되지 않은 요청입니다 CCCM006 전달된 정보가 올바르지 않습니다 CCCM007 서버, 작업 등이 올바르지 않거나 요청을 처리할 수 없습니다 CCCM019 내부 서버 오류 CCCM020 외부 호출 API가 오류를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/7.3/",
        "teaser":null},{
        "title": "8.고객지원 서비스",
        "excerpt":"Cocktail Cloud을 이용해 주셔서 감사합니다. 제품 구매 기능상담 등의 기술 지원 서비스 및 각종 혜택을 받을 수 있습니다. 제공하는 각종 서비스는 다음과 같습니다. 방문 서비스를 통하여 Q&amp;A, 제품에 관한 정보 및 기타 문의를 할 수 있습니다. 고객 등록을 마친 제품과 상담이 가능한 제품에 한하여 전화나 팩스를 통하여 전문 기술상담 서비스를...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/ko/8/",
        "teaser":null},{
        "title": "层积云是什么?",
        "excerpt":" 层积云是一种 容器一体化管理平台(All-in-one Container Management Platform)。   随着云服务的普遍使用，除了基础架构，对应用程序、服务管理的要求也越来越高。像过去的 开发和运营方式充分发挥云的优势是有限的。尤其是应用程序领域，持续整合以及部署 (Continuous Integration/Deploy，CI/CD)、迁移(Migration)、多云/混合云的构筑等自动化、高 效化、整合管理的需求日益增加。   可以说容器技术的扩散是理所当然。目前很多企业已经引进了容器技术，呈现继续增强趋势。 (参考: http://redmonk.com/fryan/2017/09/10/cloud-native-technologies-in-the-fortune-100)   容器是将应用程序或服务压缩成可独立运行单位的技术，无论基础架构环境如何，都可以提供 相同的开发和运营经验。可以实现从基础架构到服务的云管理体系标准化，也可以减少开发及 运营工作量。尤其是不变的环境下，能管理好多云/混合云是它的优点所在。   层积云将容器优点适用于云管理服务，实现了开发及运营业务的高效化，为单一或多云/混合云 战略实施提供了平台。   层积云的主要职能如下      从代码到 Build、部署、更新环节的渠道自动化;   工作负载(服务)中心的容器管理:压缩、生命周期、资源等;   全栈监控:从基础架构到容器的状态以及资源的监控、报警管理;   多云/混合云集群配置及管理:Baremetal、私人/公共云。     下文 : 层积云组件概要  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.0/",
        "teaser":null},{
        "title": "层积云组件概要",
        "excerpt":" 层积云根据其功能划分了 5 个图层。              集群管理层(Cluster Management Layer): 负责容器部署/运行的基础架构(集群)及编排 (Orchestration)的图层。编排由 Kubernetes(https://kubernetes.io)负责，提供基础架构管理、 监控等扩展管理职能。            服务管理层(Service Management Layer): 负责基于服务(Workload)的容器配置和管理的 图层。压缩服务配置的多个容器及相关对象，并管理其生命周期及监控。            渠道(Pipeline): 实现了从代码到容器 Build、部署过程的自动化，并执行持续的整合/部署。 用户可通过设置和脚本构筑所需要的渠道。            目录(Catalog): 提供通用运行时间(DB、中间件等)模板的图层。需要模板时，不需要额 外配置，可直接部署和使用。并且，还可以保存和管理用户应用程序的快照。            仪表盘(Dashboard): 提供集群、服务现状和监控视图。       下面继续了解各图层的详细内容。     上文 : 层积云介绍   下文 : 集群管理层(Cluster Management Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.1/",
        "teaser":null},{
        "title": "集群管理层(Cluster Management Layer)",
        "excerpt":"集群管理层又分为组成集群的基础架构脚本和容器编排引擎部分。其具体配置如下图。 层积云根据用户设置，自动配置(Provisioning)集群基础架构和编排引擎，CUBE 就是负责该领 域的工具。CUBE 组建高可用性(High Availability，HA)的 Kubernetes 集群。由 CUBE 配置的集 群提供高稳定性和安全性以及扩展性。(叫做 CUBE 集群) 目前 CUBE 集群支持以下云平台及供应商。CUBE 可基于基础架构独立配置，所以任何基础架 构上都可以配置。以下是基础架构自动配置为准。 物理架构(Baremetal) 云平台 : Openstack, Cloudstack, VMWare 云服 : AWS, GCP, Azure CUBE 工具还提供集群 Kubernetes 版本的升级，以及节点(物理/虚拟机)的添加/删除、备份 等集群管理职能。 层积云对多云进行整合管理。即，分配到需要一个以上集群的服务，并对整个集群执行管理和 监控。集群可按照需求添加。 CUBE 集群额外提供管理为目的的扩展组件。 监控(Monitoring) : 基础架构、容器、服务(Workload)的状态、配置、资源监控 预警(Alerting) : 当满足特定条件时，通过邮件、MSN 方式发送警告以及管理 计量(Metering) : 如果是公共云集群，查询使用费用 检查(Inspecting) :...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.2/",
        "teaser":null},{
        "title": "服务管理层(Service Management Layer)",
        "excerpt":"通常情况下一个应用程序及服务由多个容器组成。尤其是类似 Kubernetes 的编排引擎，容器以 外还需额外增加服务端口、控制器、卷等对象。因此基于容器的应用程序及服务管理，需要压 缩和管理容器以及相关对象的抽象单位。服务管理层就是负责该领域的图层。 层积云的服务管理拥有如下阶层架构。 服务(Service) : 是最上游阶层，分配和管理服务所必要的集群资源、映像注册表、映像 Build 的群组。根据开发人员和运营人员的角色赋予权限，能独立进行管理。层积云可根据需求， 创建多个服务，并按组或服务分配以及管理。 应用程序表(Application Map) : 是组成和管理应用程序的单位，相当于一个工作负载 (Workload)。例如一个服务可以由开发阶层、验证阶层、运营阶层的应用程序表组成，也 可以按照数据管理、分析系统类似功能组成应用程序表。从逻辑角度上，可以说应用程表 是管理工作负载为目的的由多个容器组成的单位。如前所述，服务由一个以上的应用程序 表组成。 层积云服务器(Cocktail Server) : 是容器和相关编排对象的压缩单位。应用程序表由一个 以上的层积云服务器组成。例如，可以 Web 服务器、DB 服务器等类似组件为准组成服务 器，也可以由小规模微服务为准组成层积云服务器。关于层积云服务器，后面进一步详细 说明。 下图是服务管理图层的配置图。 层积云服务器(Cocktail Server) 层积云服务器在服务管理层发挥最核心的功能。如前所述，层积云服务器是容器和相关编排对 象的压缩单位。层积云管理压缩对象的创建、更新等生命周期，同时把状态和资源作为一个压 缩单位进行监控以及管理。 以下是图实例。 层积云提供的管理职能有如下内容: 工作负载的创建、修改(更新)、停止、重启、删除、自动缩放 滚动更新 卷管理 服务端口管理 监控 检查 : 编排对象的状态以及部署信息查询 网络终端、日志查询 : 容器壳连接、容器日志查询 上文...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.3/",
        "teaser":null},{
        "title": "管道层(Pipeline Layer)",
        "excerpt":" 管道层实现了从代码到容器的 Build 及部署的自动化。   Build 按照用户设置，依次执行代码下载、代码 Build 以及测试等作业(Task)、容器映像 Build。 作业(Task)使用的是执行内部作业的容器，除了默认提供的容器以外，用户可扩展使用公开或 用户制作的容器。   层积云服务器容器对已 Build 的映像进行滚动更新。通过 Build 制作的映像，将自动生成 Build 编码，再通过这个编码执行最新版本或者回滚。   从 Build 到部署的所有作业执行环节，均通过管道层实现了自动化。因此，只需创建一次 Build 和管道层，开发人员可以集中编写代码和修改作业。   下图为管道层的配置图。      管道层通过持续整合和部署(CI/CD)，为 DevOps 提供基础架构。   DevOps 强调开发和运营之间的连续性和有机协作。CI/CD 是 DevOps 的必要组件之一，同样在基于容器的开发和运营领域也非常重要。     上文 : 服务管理层(Service Management Layer)   下文 : 目录层(Catalog Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.4/",
        "teaser":null},{
        "title": "目录层(Catalog Layer)",
        "excerpt":" 容器对其组成进行图像化处理，然后部署以及运行。因此，只要把容器映像和部署信息模板化，可以节省常用 DB 或中间件等反复作业的运行时间，必要时可随时轻松部署使用。   目录层是负责创建和管理上述模板的图层。目录层的配置图如下:      目录按照其目的划分为两种类型。      服务目录(Service Catalog) : 服务目录存储和管理用户以服务目的组成的应用程序快照。基 础架构或云供应商的交替等原因需要迁移时，可使用服务目录的快照功能。快照原样保存 应用程序表的配置。所以部署在其他环境时，应根据需求修改快照设置后再部署。   平台目录(Platform Catalog) : 指层积云通过‚层积云集线器‛提供的运行时间模板。用户 可以模板本身或根据自身环境修改设置后再部署。目前平台目录提供 DB、中间件、开发/ 运营工具、博客、机器学习等广泛使用的开源模板，并持续更新。     上文 : 管道层(Pipeline Layer)   下文 : 仪表板层(Dashboard Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.5/",
        "teaser":null},{
        "title": "仪表板层(Dashboard Layer)",
        "excerpt":" 层积云的仪表板层以 Web UI 形式，提供服务现状、监控、集群现状等。   仪表板按照权限分类，提供和用户角色相对应的视图。层积云的用户权限如下:           管理员(Administrator)(Admin) : 执行集群管理，对层积云的所有服务拥有管理权限。            DevOps : 只对一个以上的服务分配拥有管理权限。仪表板只提供没有权限的服务视图，不能管理集群管理、环境设置等。       层积云提供的仪表盘视图如下           综合仪表盘 : 对所有服务和集群现状进行综合显示的视图            服务管理视图 : 创建、部署、监控、运营服务为目的的 DevOps 用户视图            目录视图 : 能查询和部署服务目录和平台目录的视图            集群视图 : 能整合一个以上的集群，并管理和监控的视图            环境设置 : 层积云平台的设置视图         上文 : 目录层(Catalog Layer)  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/0.6/",
        "teaser":null},{
        "title": "1. 登录",
        "excerpt":" 以下是层积云的初始登录画面。   输入 Role、ID、密码后可以登录。   (ID 另询管理员)      初始连接或初始化密码时，密码必须修改。      90 天后可修改密码或延长使用。     ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/1/",
        "teaser":null},{
        "title": "2.环境设置",
        "excerpt":" 通过环境设置，可以管理层积云必要的用户、账号、服务。                     环境设置菜单       说明                       用户       层积云使用用户                 账号       作为 Cloud 资源使用的 Public/ Private 云账号信息                 服务       可以 Build 及部署、运营应用程序的工作区          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2/",
        "teaser":null},{
        "title": "2.1 用户",
        "excerpt":" 用户账号目录分为全部/使用/未使用，可分类查询。(使用与否显示为‘Y’，账号选择的是‘使用’;显示为‘N’，选择的是‘未使用’)   可以创建及修改、删除层积云用户账号，也可以按照账号分配 ADMIN、DEVOPS 权限。   a) 点击环境设置→用户→使用与否，从‘全部/使用/未使用’中选择一个。     用户设置                  用户设置       说明                       使用与否       根据使用与否查询过滤功能(全部/使用/未使用)                 用户创建       切换到用户添加页面                 用户 ID       用户登登录时，使用的 ID(E-mail 格式)                 名称       用户名称                 权限       用户所获得的权限(ADMIN、DEVOPS)                 使用与否       当前用户的使用与否                 最后登录时间       有关用户最后访问日期的数据信息                 说明       用户说明          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1/",
        "teaser":null},{
        "title": "2.1.1 用户添加",
        "excerpt":" 添加层积云用户的功能。   用户 ID 必须是邮件格式(Cocktail@example.com)，因为当前不支持密码设置功能，所以创建 ID 后，必须进行密码初始化修改使用。 (初始化后提供的初始密码为‘Pass0000’)   a) 点击环境设置→用户→右上角的用户创建。    b) 选择用户 ID、名称、权限后，点击‘创建’按钮。                    权限       仪表盘       服务       目录       集群       环境设置                       ADMIN       ⃝       ⃝       ⃝       ⃝       ⃝                 DEVOPS       X       △       ⃝       X       X           - ADMIN : 抄录服务管理。可使用仪表盘、服务、目录、集群、环境设置菜单   - DEVOPS : 管理被分配到会员的服务。可使用服务和目录，可查询集群  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.1/",
        "teaser":null},{
        "title": "2.1.2 用户编辑",
        "excerpt":" 编辑层积云用户信息的功能。   a) 环境设置→用户→用户操作菜单→用户编辑→修改完后，点击‘修改’按钮。     b) 除了用户 ID 以外，还可以修改名称、状态及权限。                    状态       说明                       Active       用户激活                 Inactive       用户非激活          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.2/",
        "teaser":null},{
        "title": "2.1.3 用户删除",
        "excerpt":" 删除用户账号的功能。被删除的账号以‘Y’或‘N’的形式显示激活/非激活，而不是从目录中删除。   进入用户编辑页面，把状态改为激活，可重新使用该 ID。   a) 点击环境设置→用户→用户操作菜单→用户删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.3/",
        "teaser":null},{
        "title": "2.1.4 用户密码初始化",
        "excerpt":" 初始化层积云用户密码的功能。(初始化后提供的初始密码为‘Pass0000’)   a) 点击环境设置→用户→用户操作菜单→用户密码初始化。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.1.4/",
        "teaser":null},{
        "title": "2.2 账号",
        "excerpt":" 注册、编辑、删除作为云资源的 Public/Private 云账号信息的功能。   通过注册账号，可以导出该供应商资源、计量信息，或者创建服务器。   (计量信息的确认仅限于 Google Cloud Platform、AWS。)   用户账号目录分为全部/使用/未使用，可分类查询。(使用与否显示为‘Y’，账号选择的是‘使 用’;显示为‘N’，选择的是‘未使用’)   a) 点击环境设置→账号→使用与否，从‘全部/使用/未使用’中选择一个。                    账号设置       说明                       使用与否       根据使用与否查询过滤功能(全部/使用/未使用)                 账号创建       切换到账号登录页面                 账号名称       账号名称(用户指定)                 供应商       供应商种类(OPM/RVS/IDC/AWS/GCP/AZR)                 类型       账号类型(USER/METERING)                 使用与否       账号的使用与否                 说明       账号的用户说明          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2/",
        "teaser":null},{
        "title": "2.2.1 账号添加",
        "excerpt":" 账号可以添加使用。 (如AWS 账号, GCP 账号需要输入额外信息)   a) 点击环境设置→账号→右上角的账号添加。     b) 选择需要注册账号，填写名称、类型、说明。                    供应商       说明                       Amazon Web Service       亚马逊公司的公共云服务                 Google Cloud Platform       谷歌公司的公共云服务                 Microsoft cloud Service       微软公司的公共云服务                 Rovius Cloud       Accelerite 公司的企业云服务                 Onpremise       Baremetal环境下的私人云服务                          类型       说明                       User       账号登录的默认值                 Metering       使用公共云时、获取资源使用量时选择          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.1/",
        "teaser":null},{
        "title": "2.2.1-1 AWS 账号添加",
        "excerpt":"登录 AWS 账号，需要 AWS 账号的访问秘钥和 Secret 秘钥。 a) 在 AWS 服务控制台右上角目录，点击‘Security Credentials’获取访问秘钥和 Secret 秘钥。 b) 第一个画面将弹出如下警告窗，是关于是否创建 IAM User 的内容，点击 Continue to Security Credentials 左键继续。 c) 在之后的画面，选择 Access Keys(Access Key ID and Secret Access Key)，然后点击 Create New Access Key 获取。 d) 密码发布后能看到如下窗口，可通过 Show Access Key 检查访问秘钥和信用秘钥。还可以 点击 Download Key File 保存密码。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.1.1/",
        "teaser":null},{
        "title": "2.2.1-2 GCP 账号添加",
        "excerpt":"登录 GCP 账号，需要支付账号的 ID 和 JSON 类型的 GCP 账号密码。 a) GCP 支付账号 ID，可进入 GCP 服务控制台 Billing -&gt; Overview 画面确认。 b) 进入 GCP 服务控制台，点击 APIs &amp; services -&gt; Credentials，获取 GCP 账号密码。 c) 在之后的画面，点击 Create credentials，选择 Service account key。 d) 账号密码发布画面上，将 Service account 改为 New service accoun，选择 Service account name 和 Role(Compute...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.1.2/",
        "teaser":null},{
        "title": "2.2.2 账号编辑",
        "excerpt":" 可修改账号名称及类型、状态，如果是公共云供应商，可修改密码。   如果是集群正在使用的账号，只能修改账号名称和说明。   a) 环境设置→账号→账号操作菜单→账号编辑→修改结束后，点击修改。     b) 修改名称、类型、说明、状态以及密码。                    状态       说明                       Active       账号激活                 Inactive       账号非激活          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.2/",
        "teaser":null},{
        "title": "2.2.3 账号删除",
        "excerpt":" 可删除已注册账号。如果是正在使用的账号，删除按钮显示为非激活状态。   a) 点击环境设置→账号→账号操作菜单→账号删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.2.3/",
        "teaser":null},{
        "title": "2.3 服务",
        "excerpt":" 分配工作区，而工作区能 Build、部署、运营应用程序。可按照服务种类注册用户、集群、库。   服务目录分为全部/使用/未使用，可分类查询。(使用与否显示为‘Y’，服务选择的是‘使用’; 显示为‘N’，选择的是‘未使用’)   集群添加参考本说明书的集群部分说明。   a) 点击环境设置→服务→使用与否，从‘全部/使用/未使用’中选择一个。                    用户设置       说明                       使用与否       根据使用与否查询过滤(全部/使用/未使用)                 服务创建       切换到服务添加页面                 名称       服务名称(用户指定)                 使用与否       当前服务的使用与否                 集群       服务里已注册的集群项目          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3/",
        "teaser":null},{
        "title": "2.3.1 服务添加",
        "excerpt":" 添加服务的功能。可根据服务类别，注册用户以及集群、注册表(存储库)。   a) 点击环境设置→服务→右上角的服务创建。     b) 填写需要注册服务的名称、说明、颜色、注册表以及用户、集群信息。     c) 用户、集群添加，只反映被选的复选框内容。           用户编辑            用户编辑      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3.1/",
        "teaser":null},{
        "title": "2.3.2 服务编辑",
        "excerpt":" 编辑服务信息的功能。可以修改服务名称、说明、颜色、状态，也可以编辑使用该服务的用户以及需要注册在服务目录的集群。   a) 环境设置→服务→服务操作菜单→服务编辑→修改结束后，点击修改。     b) 可修改服务名称、说明、颜色、状态以及用户、集群。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3.2/",
        "teaser":null},{
        "title": "2.3.3 服务删除",
        "excerpt":" 删除服务的功能。删除时，如为服务目录中已注册集群，则不能删除，可以先从服务编辑中删除集群后再删除。   a) 点击环境设置→服务→服务操作菜单→服务删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/2.3.3/",
        "teaser":null},{
        "title": "3.服务",
        "excerpt":" 创建和管理应用程序表和 Build 作业、工作负载的功能。                   目录       说明                              显示服务里已注册的集群种类和集群数                        切换到 Build 管理页面                        切换到应用程序表创建页面          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3/",
        "teaser":null},{
        "title": "3.1 应用程序管理",
        "excerpt":" 管理应用程序表和相应的工作负载群组以及工作负载。   ㅤㅤㅤㅤㅤ  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1/",
        "teaser":null},{
        "title": "3.1.1 应用程序表",
        "excerpt":" 应用程序的组成单位。   作为一种逻辑单位建群，并部署群组的工作负载。   可查看组成应用程序表的集群计量信息或工作负载的监控信息。   可通过部署作业，创建工作负载或更新。   a) 选择服务→应用程序表点击。                    目录       说明                              由逻辑单位组成的群组。如激活操作菜单，可修改群组名称和列数， 以及往右或往左移、右或左边添加群组、删除群组。点击+按钮可 创建工作负载。                        被部署在应用程序里的工作负载。可利用拖&amp;放自由移动。                        当前正在部署的工作负载如上图，一目了然地简单显示。                        被部署在应用程序的工作负载单位，对正使用的 CPU、内存、网 络的监控服务菜单。                        Build 映像，可一次性执行到部署作业，可修改正在部署中的工作 负载映像版本重新部署，同时批量部署多个工作负载。                        可保存使用配置图等多个设置文件。          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.1/",
        "teaser":null},{
        "title": "3.1.1-1 应用程序表创建",
        "excerpt":" 服务里创建新的应用程序表。   a) 点击服务→服务右侧的+。     b) 选择需要使用的集群，指定表的名称和命名空间名称，并创建应用程序表。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.1.1/",
        "teaser":null},{
        "title": "3.1.1-2 应用程序表名称修改",
        "excerpt":" 修改应用程序表的名称。   a) 点击服务→用用程序表右侧的✎。     b) 被激活的名称输入栏里输入修改内容后，按 Enter 键修改应用程序表的名称。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.1.2/",
        "teaser":null},{
        "title": "3.1.1-3 应用程序表删除",
        "excerpt":" 删除应用程序表的功能。为了删除应用程序表，需先删除正在部署中的工作负载。   a) 服务→应用程序表选择→应用程序表删除。      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.1.3/",
        "teaser":null},{
        "title": "3.1.2 群组管理",
        "excerpt":" 对工作负载进行群组管理。可以针对相应的群组，创建工作负载。可以修改群组名称，添加、移动、删除群组，以及修改列数。   a) 服务→选择应用程序表→点击工作负载群组的▼(操作按钮)，激活菜单。                    目录       说明                       群组名称修改       修改群组名称                 列数修改       修改列数(最小:1~最多:8)                 向左移动       群组向左移                 向右移动       群组向右移                 左边添加群组       群组左边创建新的群组                 右边添加群组       群组右边创建新的群组                 群组删除       删除群组(如群组有工作负载，则不能删除)          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.2/",
        "teaser":null},{
        "title": "3.1.3 工作负载",
        "excerpt":" 组成应用程序的最小单位。可由 1 个工作负载组成应用程序，也可以多个工作负载组成 1 个应 用程序。   a) 选择服务→应用程序表，可查看表里面的工作负载。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3/",
        "teaser":null},{
        "title": "3.1.3-1 工作负载创建",
        "excerpt":"在群组管理创建和运行工作负载。 a) 点击服务→应用程序表选择→工作负载群组+按钮(工作负载创建)。 选择工作负载类型。 b) 输入基本信息、容器、实例、更新策略、服务端口、卷的内容，点击创建按钮生成工作负 载。 工作负载基本信息定义 项目 说明 名称 需要创建的工作负载名称 群组 创建工作负载的工作负载群组 类型 工作负载的实例类型(Single/Multi) 说明 工作负载的说明 容器生成 点击容器右‘+’键 输入容器名称，在容器的 Build 或映像中选择需要使用的映像，定义需要使用的 CPU/ 内存的资源值。 一旦容器创建，可输入需要使用的命令。 输入容器的环境参数值，或者可选择 Secret 设置。 可设置安全策略 可设置容器的健康检查 实例(只适用于服务器类型为 Multi 时) 点击实例项目的‘✎’ 项目 说明 自动缩放类型 定义自动缩放的基准 CPU 使用率(百分比) 自动缩放的基准(使用率) 内存使用率(百分比) 自动缩放的基准(使用率) 最大个数 缩放实例最大值 实例数 默认实例台数 更新策略(只适用于服务器类型为 Multi...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.1/",
        "teaser":null},{
        "title": "3.1.3-2 工作负载编辑",
        "excerpt":" 编辑和重新部署运行或者停止状态的工作负载。   a) 服务→选择应用程序表→点击工作负载。     b) 编辑基本信息、容器、实例、更新策略、服务端口、卷内容后，按修改重新部署工作负载。   如果工作负载正在运行中，不能修改工作负载类型和容器映像。但，可以修改容器映像标签。 工作负载中断后，可以编辑以及修改。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.2/",
        "teaser":null},{
        "title": "3.1.3-3 工作负载实例信息查询",
        "excerpt":" 可查询工作负载实例信息。                  实例       说明                       Pods       详细信息、状态信息、事件信息、部署信息、网络终端(容器)、日 志(容器)                 Services       详细信息、事件信息、部署信息                 Persistent Volume Claims       详细信息、卷详细信息、部署信息                 Deployments       详细信息、事件信息、部署信息、自动缩放信息(选项)                 Replica Sets       详细信息、事件信息、部署信息                 Ingresses       详细信息、部署信息           a) 服务→选择应用程序表→点击工作负载。     在实例页面点击刷新时，只重新查询实例信息。    b) 实例 Pod→容器和网络终端连接     c) 实例 Pod→容器日志      d) 服务→选择应用程序表→选择工作负载→点击实例的‘操作’按钮(激活)→点击详细信     e) 服务→选择应用程序表→选择工作负载→点击实例的‘操作’按钮(激活)→点击事件信 息     f) 服务→选择应用程序表→选择工作负载→点击实例的‘操作’按钮(激活)→点击部署信息    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.3/",
        "teaser":null},{
        "title": "3.1.3-4 工作负载中断",
        "excerpt":" 中断已部署的工作负载。如果中断工作负载，POD 被删除。   a) 服务→选择应用程序表→点击运行状态的工作路径操作菜单(激活)→点击中断   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.4/",
        "teaser":null},{
        "title": "3.1.3-5 工作负载开启",
        "excerpt":" 开启已中断的工作负载。   a) 服务→选择应用程序表→点击停止状态的工作路径操作菜单(激活)→点击开始    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.5/",
        "teaser":null},{
        "title": "3.1.3-6 工作负载重启",
        "excerpt":" 重启工作负载。类似计算机重启的概念。   a) 服务→选择应用程序表→点击运行状态的工作路径操作菜单(激活)→点击重启    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.6/",
        "teaser":null},{
        "title": "3.1.3-7 工作负载删除",
        "excerpt":" 删除已中断的工作负载。   a) 服务→选择应用程序表→点击停止状态的工作路径操作菜单(激活)→点击删除    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.3.7/",
        "teaser":null},{
        "title": "3.1.4 监控",
        "excerpt":" 根据不同的工作负载、POD、容器，可查询正在使用的 CPU、内存、网络使用量。   a) 服务→选择应用程序表→点击监控      ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.4/",
        "teaser":null},{
        "title": "3.1.5 管道",
        "excerpt":"通过管道功能，可一次性进行映像 Build 作业到工作负载部署作业。 并且，可修改正在部署的工作负载映像版本再重新部署。 a) 服务→选择应用程序表→点击管道 管道菜单 说明 批量运行 批量运行管道作业 运行 运行相应管道作业 映像菜单 Build 说明 映像标签 X 输入注册表标签时，部署相应版本的工作负载 指定 ⃝ 映像版本中部署指定版本的工作负载 最新 ⃝ 映像版本中部署最新版本的工作负载 Build&amp;部署 ⃝ 新的 Build 作业后，部署相应映像版本的工作负载 b) 管道运行 1. 使用通用映像创建工作负载时 输入映像标签后，点击‘运行’或‘批量运行’(只有部署版本和输入版本不一致时可以运行。 但 latest 除外) 2. 使用 Build 映像创建工作负载时 使用指定映像部署 在管道作业目录右侧点击‘指定’以及选择映像后，点击‘运行’或者‘批量运行’(只有部 署版本和输入版本不一致时可以运行) 使用指定映像部署 在管道作业目录右侧选择‘Build&amp;部署’后，确认‘运行与否’。之后点击‘运行’或‘批量 运行’(只有确认运行与否时可以运行) 使用最新映像部署 在管道作业目录右侧选择‘最新’后，点击‘运行’或‘批量运行’。(只有部署版本和输入版 本不一致时可以运行)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.5/",
        "teaser":null},{
        "title": "3.1.6 持久化卷",
        "excerpt":" 提供持久化卷的现状以及创建和删除。   a) 服务→应用程序表→持久化卷                    项目       说明                       卷名称       点击已创建持久化卷名称时，切换到持久化卷详细页面                 卷类型       卷类型(Single、Shared)                 状态       卷的状态(Ready, Mounted)                 使用量       使用量、请求量、总量                 Age       卷创建需要时间                 Filter       通过搜索查询所必要的持久化卷                 + 按钮       切换到持久化卷创建页面                   持久化卷详细             持久化卷操作菜单        a) 卷请求信息     b) 卷信息     c) 存储信息    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.6/",
        "teaser":null},{
        "title": "3.1.6-1 持久化卷创建",
        "excerpt":" 可以创建持久化卷。   a) 服务→应用程序表→持久化卷                    项目       说明                       持久化卷类型       卷类型(Single, Shared)                 存储       显示集群里已注册的存储目录                 访问模式       持久化卷类型为 Single 时和 ReadWriteOnce, Shard 时分别选择 ReadWriteMany、ReadOnlyMany                 名称       需要创建的持久化卷名称                 容量       需要创建的持久化卷容量(GB)          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.6.1/",
        "teaser":null},{
        "title": "3.1.6-2 持久化卷删除",
        "excerpt":" 删除持久化卷。   a) 点击服务→应用程序表→持久化卷→持久化操作菜单(激活)→删除    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.6.2/",
        "teaser":null},{
        "title": "3.1.7 设置",
        "excerpt":" 应用程序的单位，可以 key=value 形式保存参数值，如同卷使用。   a) 服务→选择应用程序表→点击设置                    菜单       说明                       配置图       注册、编辑、删除配置图的管理菜单                 Secrets       注册、编辑、删除 Secrets 的管理菜单          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7/",
        "teaser":null},{
        "title": "3.1.7-1 配置图",
        "excerpt":" 可将配置文件以 Map 形式保存于服务器，如同卷使用。   a) 服务→选择应用程序表→设置→点击配置图                    项目       说明                              切换到配置图添加页面                 名称       配置图名称(用户指定)                 说明       配置图说明(用户指定)                        配置图的操作菜单          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.1/",
        "teaser":null},{
        "title": "3.1.7-1a 配置图添加",
        "excerpt":" 服务里添加配置图添加。   a) 服务→选择应用程序表→设置→配置图→点击配置图创建按钮，切换到注册页面。     b) 输入名称和数据值，按右上角创建按钮，创建配置图。                    项目       说明                       名称       输入名称的栏。之后不能编辑                 说明       输入配置图说明的栏。                 数据添加按钮       能添加配置图数据的按钮                 KEY       配置图的秘钥值                 VALUE       配置图的卷值          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.1a/",
        "teaser":null},{
        "title": "3.1.7-1b 配置图修改",
        "excerpt":" 可修改服务里已添加的配置图数据。(名称不能修改)   a) 服务→选择应用程序表→设置→配置图→配置图操作菜单(激活)→点击配置图修改     b) 修改数据值后，点击修改按钮，编辑配置图。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.1b/",
        "teaser":null},{
        "title": "3.1.7-1c 配置图删除",
        "excerpt":" 删除服务里已添加的配置图。   a) 服务→选择应用程序表→设置→配置图→配置图操作菜单(激活)→点击配置图删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.1c/",
        "teaser":null},{
        "title": "3.1.7-2 Secret",
        "excerpt":" 以 Secret 文件形式保存于服务器，如同环境参数及卷使用。   a) 服务→选择应用程序表→设置→点击 Secret。                    项目       说明                              切换到 Secret 添加页面                 名称       Secret 名称(用户指定)                 说明       Secret 说明(用户指定)                        Secret 的操作菜单          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.2/",
        "teaser":null},{
        "title": "3.1.7-2a Secret 添加",
        "excerpt":" 服务里添加 Secret。   a) 服务→选择应用程序表→设置→Secret→点击 Secret 创建按钮，切换到注册页面。     b) 输入名称和数据值，点击右上角创建按钮，创建 Secret。                    项目       说明                       名称       输入名称的栏。之后不能编辑                 说明       输入 Secret 说明的栏。                 数据添加按钮       能添加 Secret 数据的按钮                 KEY       Secret 的秘钥值                 VALUE       Secret 的卷值          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.2a/",
        "teaser":null},{
        "title": "3.1.7-2b Secret 修改",
        "excerpt":" 可修改服务里已添加的 Secret 数据。(名称不能修改)   a) 服务→选择应用程序表→设置→Secret→Secret 操作菜单(激活)→点击 Secret 修改。     b) 修改数据值后，点击修改按钮，编辑 Secret。(为了安全考虑 Secret 值不显示)    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.2b/",
        "teaser":null},{
        "title": "3.1.7-2c Secret 删除",
        "excerpt":" 删除服务里的 Secret。   a) 服务→选择应用程序表→设置→Secret→Secret 操作菜单(激活)→点击 Secret 删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.1.7.2c/",
        "teaser":null},{
        "title": "3.2 Build 管理",
        "excerpt":" 管理 Docker 映像的 Build 作业。   下载应用程序、Build 源文件和映像文件，上传到 Habor 注册表。   a) 服务→选择 Build 管理点击。                    目录       说明                              Build 创建按钮                 Build 名称       Build 名称                 映像名称       被存储的 Docker 映像名称                 映像尺寸       被存储的 Docker 映像大小。以 MB 单位来标记                 最近操作       显示 Build 的状态                 状态       显示 Build 的运行状态                 日期       显示 Build 运行日期                        Build 操作菜单          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2/",
        "teaser":null},{
        "title": "3.2.1 Build 添加",
        "excerpt":"添加 Docker 映像的 Build 作业。应用程序下载、Build、映像 Build 共 3 种可选。 a) 服务→Build 管理→选择 Build 添加，切换到该页面。 b) 输入应用程序下载、应用程序 Build、映像 Build 内容，点击创建按钮，创建服务器。 Build 生成阶段 说明 应用程序下载 下载 Build 必要的源代码 应用程序 Build 需要编译源代码时使用 命令 - Build 时将运行的作业 主机路径 - 容器工作路径和其挂载的主机路径 Working dir - 实际容器内部工作路径，和容器路径对接 映像 - Build 时所使用的映像 映像 Build 利用前述作业的源代码创建 Docker 文件生成映像后，该映像存储于 注册表存储库的阶段...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.1/",
        "teaser":null},{
        "title": "3.2.2 作业设置编辑",
        "excerpt":" 编辑 Build 作业。Build 名称不能编辑。在编辑页面，可删除现已下载的源代码，也可以分别运行应用程序下载、应用程序 Build、映像 Build3 种作业。   a) 服务→Build 管理→Build 操作菜单(激活)→选择作业设置编辑，切换到该页面。                    作业设置编辑       说明                       源文档删除       删除下载源文档                 应用程序下载运行       只运行应用程序下载                 Build 高速缓存删除       删除现已 Build 的容器                 应用程序 Build 运行       只运行应用程序 Build                 映像 Build 运行       只运行映像 Build          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.2/",
        "teaser":null},{
        "title": "3.2.3 历史记录",
        "excerpt":" 切换到该 Build 历史页面，可针对 Build 运行项查看历史信息。可通过 Build 运行单位查看日志。   a) 服务→Build 管理→Build 操作菜单(激活)→选择历史记录，切换到该页面。     b) Build 作业历史菜单中，确认该 Build 作业的操作名称、状态、日期、作业时间、映像名称、 映像大小、Build 日志。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.3/",
        "teaser":null},{
        "title": "3.2.4 Build 运行",
        "excerpt":" 运行 Build 作业。如果运行 Build，就一次性运行应用程序下载、应用程序 Build、映像 Build。   a) 选择服务→Build 管理→Build 操作菜单(激活)→Build 运行，执行 Build 作业。     b) 运行 Build 时，当前操作被修改，同时日志窗被激活。   Build 生成时，只限于选框中被选的数量标签进行激活，可查看各阶段 Build 过程。   (如果 DOWN 阶段发生错误，不会进行下一步。)   如果 Build 运行作业中看到 “Application_Create_Image Step is done…” 的日志, 说明映像 Build 已 成功完成。   ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.4/",
        "teaser":null},{
        "title": "3.2.5 Build 取消",
        "excerpt":" 取消 Build 作业。只能取消运行状态(RUNNING)的 Build 作业。   a) 选择服务→Build 管理→Build 操作菜单(激活)→Build 取消，取消 Build 作业。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.5/",
        "teaser":null},{
        "title": "3.2.6 日志查看",
        "excerpt":" 显示 Build 作业的最新运行日志。如果 Build 作业在运行中，就可以查看日志。   a) 选择服务→Build 管理→Build 操作菜单(激活)→日志查看，可查看该 Build 作业的 Build 运行日志。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.6/",
        "teaser":null},{
        "title": "3.2.7 作业删除",
        "excerpt":" 删除 Build 作业。删除时，先删除该高速缓存和已下载源文档后，再进行删除作业。   a) 选择服务→Build 管理→Build 操作菜单(激活)→作业删除，可删除该 Build 作业。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/3.2.7/",
        "teaser":null},{
        "title": "4.目录",
        "excerpt":" 通过应用程序配置的模板化，可轻松创建、部署、管理工作负载的功能。   当一次性捆绑使用多个工作负载时，使用目录功能。   目录分为服务目录和平台目录。                     目录菜单       说明                       服务目录       用户创建的目录                 平台目录       层积云默认提供的正式目录                 过滤目录       通过搜索，查看所需要的模板                 模板       组成应用程序的工作负载集合                 部署       通过目录，部署工作负载                 编辑       对目录内容进行编辑          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4/",
        "teaser":null},{
        "title": "4.1 目录保存",
        "excerpt":" 可以创建目录，一次性捆绑部署所需要的服务器。当工作负载容器映像为 Build 时，只保存映像，并转换成共享映像后，保存于目录。在服务目录页面，可查看已保存的目录。   目录保存时，以模板形式保存设置的配置图、Secret。 (但，为了安全考虑 Secret 值不保存。)   a) 在服务页面，选择保存为目录的应用程序表。   b) 点击页面右上角的 “保存为目录” 按钮。   c) 创建新模板时，选择”现有”目录，更新”新”目录和现有模板，然后撰写版本、摘要信息 和编辑内容，再点击下面”保存”按钮。(编辑、输入字段采用 Mark Down 文件格式, 该文件 的撰写方法可点击页面右侧的”Mark Down support”查看。)    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.1/",
        "teaser":null},{
        "title": "4.2 目录部署",
        "excerpt":" 可以部署已创建目录。必要时，可以排除或编辑、部署不需要的实例。   a) 点击目录→需要部署模板的”部署”按钮。     b) 在模板目录页面，选择服务、集群、应用程序表后, 再点击”部署”。除了不需要的实例， 均可以部署。           部署新的应用程序表时，选择服务和集群，撰写应用程序表、命名空间名称后，可进行部 署。             部署现有应用程序表时，选择服务、应用程序表后，可进行部署。        c) 为了安全考虑 Secret 值不保存，应在部署前输入值。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.2/",
        "teaser":null},{
        "title": "4.3 目录编辑",
        "excerpt":" 可编辑已创建目录内容。可修改模板的版本、摘要信息和编辑内容，同时可以修改各种实例的部署信息。   a) 点击目录→需要编辑模板的”编辑”按钮。     b) 更改需要修改的模板的版本、摘要信息、编辑内容, 再点击页面右下角的”编辑”按钮， 可修改实例的部署信息。     c) 编辑页面上只能查看配置图和 Secret 的内容, 不能编辑。     d) 编辑服务器时, 只能查看容器的环境设置, 卷和挂载卷的内容, 不能编辑。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.3/",
        "teaser":null},{
        "title": "4.4 目录删除",
        "excerpt":" 可删除不必要的目录。(Platform 目录不能删除)   a) 点击目录→需要删除模板的”编辑”按钮。     b) 选择需要删除模板的版本后, 点击”删除”按钮, 删除该模板的版本。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/4.4/",
        "teaser":null},{
        "title": "5.集群",
        "excerpt":" 提供集群的注册管理，以及节点和应用程序为单位的监控、卷、报警和计量服务。                  集群菜单       说明                       节点       所有节点的 CPU、内存、网络使用量以及个别节点的监控服务                 应用程序       所有应用程序的 CPU、内存、网络使用量以及个别应用程序的监控 服务                 卷       存储管理以及卷现状                 报警       集群事件信息相关的报警服务                 计量       集群费用及各种资源费用服务                 注册管理       集群的查看、修改、删除          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5/",
        "teaser":null},{
        "title": "5.1 集群管理",
        "excerpt":" 注册、编辑、删除从供应商那里得到分配的 Kubernetes 集群信息的功能。   a) 点击集群→”排列”按钮，选择需要的排列标准。                   集群设置       说明                       +集群注册       切换到集群添加页面                 集群       集群的种类                 节点       集群的节点数字                 CPU       集群所有的 CPU 容量、请求量、使用量                 内存       集群所有的内存容量、请求量、使用量                 应用程序       集群的应用程序表(命名空间)数                 工作负载       正在部署在集群的工作负载数          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.1/",
        "teaser":null},{
        "title": "5.1.1 集群添加",
        "excerpt":"可添加注册集群的功能。 a) 点击集群→右上角带+符号的按钮。 b) 输入基本信息(名称、k8s 版本、说明) 基本信息 说明 名称 需要注册的集群名称 k8s 版本 集群已安装的 Kubernetes 版本信息。e.g)1.8.13 ID 对集群默认 ID(用户指定)、报警消息进行重定向时需要 说明 集群的用户说明 c) 输入供应商信息(账号、类型、地域)。 根据账号的供应商和类型，输入栏毁被修改。如果是 Baremetal，重定向提供默认值，可以修改。 供应商 说明 账号 已注册账号 类型 Kubernetes 的使用类型，从 MANAGED、PROVIER、GKE 中选择 重定向 已安装 Kubernetes 服务器的重定向 类型 说明 MANAGED 使用 CUBE 安装程序组成 kubernetes 的集群 PROVIDER Kubernetes 基于公共云 VM 使用，但...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.1.1/",
        "teaser":null},{
        "title": "5.1.2 集群编辑",
        "excerpt":" 修改集群的基本信息、供应商、监控、集群类型的功能。但不能修改供应商的账号、类型、重 定向。   a) 集群→选择集群→注册管理→修改按钮→修改结束后，点击保存按钮。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.1.2/",
        "teaser":null},{
        "title": "5.1.3 集群删除",
        "excerpt":" 删除集群信息的功能。如有应用程序表正在使用该集群，则不能删除。   a) 集群→选择集群→注册管理→点击‘删除’按钮。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.1.3/",
        "teaser":null},{
        "title": "5.2 节点",
        "excerpt":" 可查询所有节点的全部磁盘、CPU、内存、网络使用量以及个别节点的 Label、状态信息等的 画面。点击节点名称，即可查询节点详细信息。   a) 集群→选择集群→点击节点。     b) 点击节点名称，即可查询节点详细信息。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.2/",
        "teaser":null},{
        "title": "5.3 应用程序",
        "excerpt":" 可查看所有应用程序的全部 CPU、内存、网络使用量以及个别应用程序的命名空间、实例现状 等的画面。点击应用程序名称，可切换到该应用程序表的页面。   a) 集群→选择集群→点击应用程序。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.3/",
        "teaser":null},{
        "title": "5.4 卷",
        "excerpt":" 注册公共云存储以及外部存储的信息，提供当前卷的监控服务。   a) 集群→选择集群→点击卷。                    存储设置信息       说明                       +按钮       切换到存储添加页面                 名称       存储名称(用户指定)                 类型       存储种类(NFS/EBS/Google Persistent Disk/Azure Disk)                 存储类别名称       已注册在 k8s 的类别名称                 策略       存储卷策略设置(Retain,Recyle,Delete)                 状态       存储使用状态                          卷设置信息       说明                       卷名称       PVC 名称                 状态       PVC 挂载状态                 使用量       PV 已分配的可用量和使用量                 访问模式       PV 访问权限                 Age       PVC 创建所需时间          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.4/",
        "teaser":null},{
        "title": "5.4.1 存储添加",
        "excerpt":"可以添加卷使用。 a) 选择集群→集群。 b) 进入集群详细画面，选择卷。 c) 进入集群详细画面，选择卷 存储注册信息 说明 名称 PV 名称 说明 PV 用户说明 类型 存储类型 (Single, Shared) 存储插件 存储种类(NFS, NFS Named, EBS, Google Persistent Disk, Azure Disk) 策略 PV 使用策略(RETAIN/DELETE) 类型 说明 Single 只能用于一个工作负载的存储 Shared 可用于多个工作负载之间共享的存储 策略 说明 Retain 即使持久化卷请求(PVC)被删除，数据仍保留在持久化卷(PV)中。之后 可以重复使用，但重复使用时，需要重新注册 PV。 Delete PVC 被删除的同时该 PV 也一起被删除。 d)...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.4.1/",
        "teaser":null},{
        "title": "5.4.2 存储编辑",
        "excerpt":" 编辑已注册存储信息的功能。但，不能编辑 NFS 命名类型的存储。   a) 集群→选择集群→卷→卷操作按钮→点击存储编辑。     b) 不能修改名称、说明、策略、存储类别名称、参数值。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.4.2/",
        "teaser":null},{
        "title": "5.4.3 存储删除",
        "excerpt":" 删除已注册存储信息的功能。   a) 集群→选择集群→卷→卷操作按钮→点击卷删除。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.4.3/",
        "teaser":null},{
        "title": "5.5 报警",
        "excerpt":" 使用此功能接收有关集群的事件。   a) 集群→选择集群→点击报警。     b) 点击报警名称，即可查询详细内容。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.5/",
        "teaser":null},{
        "title": "5.5.1 报警目录",
        "excerpt":"在以下目录的持续时间内，触发条件仍未改善时报警。 报警管理 报警 ID ALM-001 重要程度 警告 报警名称 AlertmanagerDown 持续时间 5分钟 触发条件 无法搜集报警管理度量时启动 解决方案 检查 Prometheus 日志以及报警管理日志和事件。必要时重启 Pod。 报警 ID ALM-002 重要程度 警告 报警名称 AlertmanagerFailedReload 持续时间 10分钟 触发条件 修改管理设置时，重读设置失败时启动 解决方案 检查该 Pod 日志，纠正配置图设置错误。 ETCD3 报警 ID ETC-001 重要程度 危急 报警名称 InsufficientMembers 持续时间 3分钟 触发条件 无法搜集 ETCD 度量时启动 解决方案 检查 ETCD...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.5.1/",
        "teaser":null},{
        "title": "5.6 计量",
        "excerpt":" 对正在使用的各种集群，提供计量(计费)监控服务。   计量服务仅限于适用公共云的 AWS 和 GCP。   a) 集群→选择集群→点击计量。    ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/5.6/",
        "teaser":null},{
        "title": "6.仪表盘",
        "excerpt":" 通过仪表盘，可一目了然层积云所服务的信息。           摘要信息       可查看当前已注册管理的应用程序数量、工作负载数量、已注册集群数、当前启用报警数。            资源现状       可查看 CPU、内存的总量、请求量、使用量以及存储(节点、Pv)总量。            供应商集群现状       可查看不同供应商已注册的集群数、应用程序数量、工作负载数量。            集群费用现状       可查看正在使用的集群费用。            集群上游资源请求率       可查看正在使用的集群中，上游 5 个集群的资源分配率(request)。            各应用程序的上游资源请求量       可查看正在使用的应用程序中，上游 5 个应用程序的资源分配量。         ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6/",
        "teaser":null},{
        "title": "6.1 用户管理",
        "excerpt":" 可查看和管理当前用户信息。      a) 点击仪表盘→页面左下角的用户形状按钮。                  目录       说明                       ID       可查看当前使用的账号 ID。                 用户语言选择       可选韩语、日语、英语其中一个。                 主题       可修改 Light 和 Dark 主题。                 密码修改       可输入新旧密码修改密码。                 帮助       提供关于层积云使用功能的帮助手册。                 产品名称       显示产品名称层积云。                 版本       可查看当前层积云版本。                 注销       注销当前使用账号。          ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/6.1/",
        "teaser":null},{
        "title": "7.术语说明",
        "excerpt":" 为了帮助用户了解层积云的运用，下面对 Kubernetes 及层积云的术语进行了整理。  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7/",
        "teaser":null},{
        "title": "7.1 Kubernetes(k8s)",
        "excerpt":"1.集群 术语 说明 Namespace k8s 的虚拟集群，可以为用户提供分组或分项目的额外操作环境 Nodes 驱动 k8s 已分组的应用程序物理服务器或 VM Persistent Volumes(PV) 支持在外部存储、NFS、iSCSI、云上提供的存储系统 Roles 根据使用情况授权 Storage Classes 对 PV 进行动态配置时，用于识别 NFS 服务器的标识符 2.工作负载 术语 说明 Cron Jobs 如”在特定时点一次”或者”在特定时点反复”,基于时间的管理作业 Deployments 用于创建 Pod 的设定值注册信息 Jobs Job 是执行批处理的 Pod 的 Supervisor。即，如特定的计算或备份，只在特定 时间内运行的处理器 Pods 由 1 个以上容器组成的 k8s 里最小的部署单位。Pod 是在应用程序全栈中由 不同的 Docker 映像组合而成...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.1/",
        "teaser":null},{
        "title": "7.2 层积云",
        "excerpt":"1.环境设置 为了使用层积云，事先注册信息的服务。 术语 说明 用户 为层积云使用用户，提供管理支持 账号 支持 k8s 集群用户认证信息的管理 服务 业务或项目为单位，分散管理作业。相比一般用户，管理员可赋予访问服务单位 的权限 C.集群:为了使用 k8s，管理 k8s 信息的页面 2.服务 应用程序为单位细分作业，可通过 Build 创建 Docker 映像。通过已 Build 映像，对应用程序实 施创建、查看、修改、删除等管理的服务。 术语 说明 应用程序表 k8s 的命名空间 Build 支持 Docker 映像作业的服务 监控 在应用程序内部，对服务器提供 Pod、容器为单位的资源监控 管道 从 Build 到部署，可一次性方便运行的服务 设置 应用程序单位，能保存并使用参数值或文件的服务 3.目录 通过应用程序配置的模板化，可轻松创建、部署、编辑管理服务器的服务。 4.集群 可查询集群、节点、应用程序、卷/存储、报警、计量等的注册管理以及现状的服务。 术语 说明...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.2/",
        "teaser":null},{
        "title": "7.3 层积云系统故障代码",
        "excerpt":"1. 故障代码 代码 信息 CCCM001 无法显示具体错误代码。 CCCM002 未知错误。 CCCM004 无效函数导出的参数。 CCCM005 未经认证的请求。 CCCM006 传递信息不正确。 CCCM007 服务器、作业等不正确或者无法处理请求。 CCCM019 内部服务器错误。 CCCM020 外部导出API返回错误或导出失败。 CCCM023 无需要执行的作业。 CCCM026 发生了错误。 CCCM027 注册中发生了错误。 CCCM028 修改中发生了错误。 CCCM029 删除中发生了错误。 CCCM030 查询中发生了错误。 CDCM031 数据库作业中发生了错误。请稍后再尝试。仍未改善时，请咨询管理员。 CDCM032 数据库连接中发生了错误。请稍后再尝试。如果可以，请检查数据库连接状态，或者咨询管理员。 CKSY001 Cube集群API发生了错误。 CKSY002 层积云不支持Cube集群版本。 CKSY003 加密中发生了错误。 CCUS001 未注册的用户ID。 CCUS002 用户密码不一致。 CCUS003 用户指定权限未分配的用户。 CCUS004 已注册用户。...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/7.3/",
        "teaser":null},{
        "title": "8.售后服务",
        "excerpt":" 非常感谢使用层积云。   可享受产品功能购买咨询等技术服务以及各种优惠。所提供的各种服务如下:      可通过访问服务，咨询 Q&amp;A、产品相关信息以及其他疑问。   对客户已注册产品和可咨询产品，可通过电话或传真进行专业技术咨询服务。   提供各种活动邀请以及信息。   服务支持   邮箱 : byoungoh.lee@namutech.co.kr   产品开发商   ACON 软件(株)      地址 : 首尔特别市 江南区 驿三路 239 号 华光中心 4 层   TEL : 02-554-0301   FAX : 02-554-0302  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/docs/zh/8/",
        "teaser":null},]
