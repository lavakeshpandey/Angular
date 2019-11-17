PRINT N'Creating Schema [Inventory]...';


GO
CREATE SCHEMA [Inventory]
    AUTHORIZATION [dbo];
											 
											 
										 
										 
											 
-- Changes
----- DeviceModel/DeviceList, table not needed, refer to PW DB - MM_VIDEOSYSTEM_C 
----- SwType coloumn to [SwColorStandardID]
----- new table added for [SwColorStandard] NTSC or PAL or etc. Can we handle this with an enum?
----- [JobDetails] and [AuditJobDetails] dropped
----- [FileDetails].[HelpDocument] removed, new table added for blob and blob type managements
--------------
----- [SoftwarePackage].IsDeleted column has been added
------[FileDetails]. [ParentDirectory] has been made nullable as per the mail below.
------[FileDetails]. [FileURL] has been made nullable as per the mail below
------[SwPackageBlobsMap] table has been added
------[SoftwarePackage].[BlobUID] column has been removed as we have introduced the [Inventory].[SwPackageBlobsMap] table
------[SwPackageModelMap].[DeviceModelName] Column added  
------Primary key constraint added in the [Blobs] table  
------TBD Indentity column needs to be added in [BlobTypes] table
------TBD Primary key constraint added in the [BlobTypes] table 
------TBD Primary key constraint added in the [SwPackageModelMap] table 
------TBD Primary key constraint added in the [SwPackageBlobsMap] table  


GO
PRINT N'Creating [Inventory].[SoftwarePackage]...';


GO
CREATE TABLE [Inventory].[SoftwarePackage] (
    [SwPkgID]           INT              IDENTITY (1, 1) NOT NULL,
    [SwPkgUID]          UNIQUEIDENTIFIER NOT NULL,
    [SwPkgDescription]  NVARCHAR (500)   NULL,
    [SwPkgVersion]      VARCHAR (100)    NULL,
    [SwColorStandardID]	INT              NULL,  -- Sw type => NTSC or PAL?
    [AddedDate]         DATETIME2 (3)    NOT NULL, 
    [SwVersion]			INT              NULL,  -- Sw Version 	
    [ReleaseDate]       DATETIME2 (3)    NULL, -- future use
    [IsMajor]           BIT              NULL, -- future use
    [IsObsolete]        BIT              NULL, -- future use
    [IsSupportSwUpdate] BIT              NULL, -- future use
    [IsSupportPwUpdate] BIT              NULL, -- future use
    [IsSupportNTP]      BIT              NULL, -- future use
	[StoreInDB]			TINYINT          NULL, -- for future use, default to 1
	[IsDeleted]         TINYINT          NOT NULL, 
    CONSTRAINT [PK_SwPkg_UID] PRIMARY KEY NONCLUSTERED ([SwPkgUID] ASC)
);

------------------------
GO
PRINT N'Creating [Inventory].[SwColorStandard]...';


GO
CREATE TABLE [Inventory].[SwColorStandard] (
    [SwColorStandardID]				INT  IDENTITY (1, 1) NOT NULL,
    [SwColorStandardName]			VARCHAR (100) NOT NULL,
	CONSTRAINT [PK_SwColorStandard_ID] PRIMARY KEY NONCLUSTERED ([SwColorStandardID] ASC)
);

GO
PRINT N'Creating [Inventory].[FileDetails]...';


GO
CREATE TABLE [Inventory].[FileDetails] (
    [FileDetailsID]    INT              IDENTITY (1, 1) NOT NULL,
    [FileDetailsUID]   UNIQUEIDENTIFIER NOT NULL,
    [SwPkgUID]         UNIQUEIDENTIFIER NOT NULL,
    [ParentDirectory]  NVARCHAR (300)   NULL,
    [FileName]         NVARCHAR (200)   NOT NULL,
    [FileFormat]       NVARCHAR (30)    NOT NULL,
    [FileSize]         VARCHAR (30)     NOT NULL,
    [FileURL]          NVARCHAR (512)   NULL,
    [FileUploadDate]   DATETIME2 (3)    NULL,
    [FileChecksum]     VARCHAR (120)    NULL,
    [FileChecksumType] VARCHAR (60)     NULL,
    [CreatedBy]        NVARCHAR (200)   NULL,
    CONSTRAINT [PK_FileDetails_ID] PRIMARY KEY NONCLUSTERED ([FileDetailsUID] ASC)
);


GO
PRINT N'Creating [Inventory].[SwPackageModelMap]...';


GO
CREATE TABLE [Inventory].[SwPackageModelMap] (
    [MapId]			INT              IDENTITY (1, 1) NOT NULL,
    [DeviceModelId] INT              NOT NULL,
	[DeviceModelName] varchar(50)    NOT NULL,
    [SwPkgUID]		UNIQUEIDENTIFIER NOT NULL,
	CONSTRAINT [PK_SwPackageModelMap_ID] PRIMARY KEY NONCLUSTERED ([MapId] ASC)
);

GO
PRINT N'Creating [Inventory].[Blobs]...';


GO
CREATE TABLE [Inventory].[Blobs] (
    [BlobID]		INT              IDENTITY (1, 1) NOT NULL,
    [BlobUID]		UNIQUEIDENTIFIER NULL,
    [Description]	VARCHAR (15)     NOT NULL,
    [BlobTypeID]	UNIQUEIDENTIFIER NULL,
	[Blob]			VARBINARY(max)	 NOT NULL,
	CONSTRAINT [PK_Blobs_ID] PRIMARY KEY NONCLUSTERED ([BlobID] ASC)
);

GO
PRINT N'Creating [Inventory].[BlobTypes]...';


GO
CREATE TABLE [Inventory].[BlobTypes] (
	[BlobTypeID]	INT              IDENTITY (1, 1) NOT NULL,
    [BlobTypeUID]	UNIQUEIDENTIFIER NULL,
    [Description]	VARCHAR (15)     NOT NULL,
    [FileFormat]	TINYINT          NOT NULL,	-- Enum: 1 - bin, 2 - pdf, etc - this is for future use
	CONSTRAINT [PK_BlobTypes_ID] PRIMARY KEY NONCLUSTERED ([BlobTypeID] ASC)
);

GO
PRINT N'Creating [Inventory].[SwPackageBlobsMap]...';


GO
CREATE TABLE [Inventory].[SwPackageBlobsMap] (
    [MapId]			INT              IDENTITY (1, 1) NOT NULL,
    [BlobUID] 		UNIQUEIDENTIFIER NOT NULL,
    [SwPkgUID]		UNIQUEIDENTIFIER NOT NULL,
	CONSTRAINT [PK_SwPackageBlobsMap_ID] PRIMARY KEY NONCLUSTERED ([MapId] ASC)
);
