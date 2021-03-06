USE [master]
GO
/****** Object:  Database [ordinacija]    Script Date: 11/8/2018 7:30:23 AM ******/
CREATE DATABASE [ordinacija]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ordinacija', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ordinacija.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ordinacija_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ordinacija_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ordinacija] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ordinacija].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ordinacija] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ordinacija] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ordinacija] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ordinacija] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ordinacija] SET ARITHABORT OFF 
GO
ALTER DATABASE [ordinacija] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ordinacija] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ordinacija] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ordinacija] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ordinacija] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ordinacija] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ordinacija] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ordinacija] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ordinacija] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ordinacija] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ordinacija] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ordinacija] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ordinacija] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ordinacija] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ordinacija] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ordinacija] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ordinacija] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ordinacija] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ordinacija] SET  MULTI_USER 
GO
ALTER DATABASE [ordinacija] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ordinacija] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ordinacija] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ordinacija] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ordinacija] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ordinacija] SET QUERY_STORE = OFF
GO
USE [ordinacija]
GO
/****** Object:  Table [dbo].[Ordinacija]    Script Date: 11/8/2018 7:30:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ordinacija](
	[Naziv] [nvarchar](50) NOT NULL,
	[Stomatolog] [nvarchar](50) NOT NULL,
	[Administrator] [nvarchar](50) NOT NULL,
	[RadnoVrijemeOD] [time](7) NOT NULL,
	[RadnoVrijemeDO] [time](7) NOT NULL,
	[Telefon] [nvarchar](50) NULL,
	[Adresa] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pacijent]    Script Date: 11/8/2018 7:30:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pacijent](
	[PacijentID] [int] IDENTITY(1,1) NOT NULL,
	[Ime] [nvarchar](50) NOT NULL,
	[Prezime] [nvarchar](50) NOT NULL,
	[DatumRodenja] [date] NOT NULL,
	[Telefon] [nvarchar](50) NOT NULL,
	[Adresa] [nvarchar](50) NULL,
 CONSTRAINT [PK_Pacijent] PRIMARY KEY CLUSTERED 
(
	[PacijentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rezervacija]    Script Date: 11/8/2018 7:30:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rezervacija](
	[RezervacijaID] [int] IDENTITY(1,1) NOT NULL,
	[PacijentID] [int] NOT NULL,
	[VrijemePocetka] [datetime] NOT NULL,
	[VrijemeZavrsetka] [datetime] NOT NULL,
	[RezervacijaPotvrda] [bit] NOT NULL,
	[Administrator] [nvarchar](50) NOT NULL,
	[Stomatolog] [nvarchar](50) NOT NULL,
	[Napomena] [nvarchar](100) NULL,
 CONSTRAINT [PK_Rezervacija] PRIMARY KEY CLUSTERED 
(
	[RezervacijaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RezervacijaZahvat]    Script Date: 11/8/2018 7:30:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RezervacijaZahvat](
	[RezervacijaID] [int] NOT NULL,
	[ZahvatID] [int] NOT NULL,
 CONSTRAINT [PK_RezervacijaZahvat] PRIMARY KEY CLUSTERED 
(
	[RezervacijaID] ASC,
	[ZahvatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Zahvat]    Script Date: 11/8/2018 7:30:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Zahvat](
	[ZahvatId] [int] IDENTITY(1,1) NOT NULL,
	[Sifra] [nvarchar](50) NOT NULL,
	[Naziv] [nvarchar](50) NOT NULL,
	[Cijena] [decimal](18, 0) NOT NULL,
	[Trajanje] [int] NOT NULL,
 CONSTRAINT [PK_Zahvat] PRIMARY KEY CLUSTERED 
(
	[ZahvatId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Ordinacija] ([Naziv], [Stomatolog], [Administrator], [RadnoVrijemeOD], [RadnoVrijemeDO], [Telefon], [Adresa]) VALUES (N'in2dental', N'Ivo Ivić', N'Marija Horvat', CAST(N'07:00:00' AS Time), CAST(N'15:00:00' AS Time), N'098100100', N'Matije Gupca 34A, 10000 ZAgreb')
SET IDENTITY_INSERT [dbo].[Pacijent] ON 

INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (1, N'Siniša', N'Bartolović', CAST(N'1988-07-14' AS Date), N'0989168336', N'Matije Gupca 47a, Ko. Ivanec')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (3, N'Krunoslav', N'Medvarić', CAST(N'1985-08-05' AS Date), N'098999999', N'Vinogradska 12')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (4, N'Renato', N'Latin', CAST(N'1980-04-24' AS Date), N'099874547', N'Braće Radić 22')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (5, N'Stjepan', N'Dlesk', CAST(N'1954-06-16' AS Date), N'0958746547', N'Vinogradska 57')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (6, N'Ivan', N'Čevis', CAST(N'1992-04-01' AS Date), N'095475695', N'Braće Radić 84')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (7, N'Davor', N'Mladenović', CAST(N'1988-07-14' AS Date), N'048625245', N'Matije Gupca 90')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (8, N'Marko', N'Mladenović', CAST(N'1978-06-18' AS Date), N'048625245', N'Matije Gupca 40')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (9, N'Marko', N'Vitasović', CAST(N'1978-09-27' AS Date), N'654748', N'Ilica 198')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (10, N'Željko', N'Suhan', CAST(N'1978-05-21' AS Date), N'098-845-6547', N'Vinogradska 154d')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (11, N'Filip', N'Piskač', CAST(N'1991-11-20' AS Date), N'098-456-0475', N'Matije Gupca 45')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (12, N'Krešimir', N'Vidović', CAST(N'2018-11-14' AS Date), N'654748', N'Matije Gupca 90')
INSERT [dbo].[Pacijent] ([PacijentID], [Ime], [Prezime], [DatumRodenja], [Telefon], [Adresa]) VALUES (13, N'Maja', N'Medvarić', CAST(N'1990-08-14' AS Date), N'098550545', N'Ilica 245')
SET IDENTITY_INSERT [dbo].[Pacijent] OFF
SET IDENTITY_INSERT [dbo].[Rezervacija] ON 

INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (6, 1, CAST(N'2018-11-11T07:00:00.000' AS DateTime), CAST(N'2018-11-09T07:30:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo Ivić', N'Čišćenje zuba donjeg')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (11, 1, CAST(N'2018-11-11T10:00:00.000' AS DateTime), CAST(N'2018-11-09T10:30:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo Ivić', N'Pregled')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (18, 3, CAST(N'2018-11-08T08:00:00.000' AS DateTime), CAST(N'2018-11-08T09:00:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo Ivić', N'Brušenje zuba')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (20, 4, CAST(N'2018-11-08T09:00:00.000' AS DateTime), CAST(N'2018-11-08T10:00:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo Ivić', N'Izbjeljivanje Zubi')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (22, 5, CAST(N'2018-11-08T12:00:00.000' AS DateTime), CAST(N'2018-11-08T13:30:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo Ivić', N'Privremena krunica')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (23, 3, CAST(N'2018-11-08T11:00:00.000' AS DateTime), CAST(N'2018-11-08T12:00:00.000' AS DateTime), 0, N'Maija Horvat', N'Ivo Ivić', N'Implatant')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (24, 5, CAST(N'2018-11-09T08:00:00.000' AS DateTime), CAST(N'2018-11-09T09:00:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo ivić', N'Pregled')
INSERT [dbo].[Rezervacija] ([RezervacijaID], [PacijentID], [VrijemePocetka], [VrijemeZavrsetka], [RezervacijaPotvrda], [Administrator], [Stomatolog], [Napomena]) VALUES (26, 4, CAST(N'2018-11-09T10:00:00.000' AS DateTime), CAST(N'2018-11-09T11:00:00.000' AS DateTime), 0, N'Marija Horvat', N'Ivo Ivić', N'Pregled')
SET IDENTITY_INSERT [dbo].[Rezervacija] OFF
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (6, 4)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (11, 1)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (18, 3)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (20, 4)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (22, 5)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (23, 5)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (24, 4)
INSERT [dbo].[RezervacijaZahvat] ([RezervacijaID], [ZahvatID]) VALUES (26, 1)
SET IDENTITY_INSERT [dbo].[Zahvat] ON 

INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (1, N'PR', N'Pregled', CAST(200 AS Decimal(18, 0)), 30)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (3, N'VZ', N'Brušenje zuba', CAST(150 AS Decimal(18, 0)), 60)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (4, N'3', N'Čišćenje zuba', CAST(200 AS Decimal(18, 0)), 30)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (5, N'Privremena krunica', N'Privremena krunica', CAST(220 AS Decimal(18, 0)), 60)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (6, N'Ekstrakcija', N'Ekstrakcija', CAST(190 AS Decimal(18, 0)), 30)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (7, N'Izbjeljivanje zubi', N'Izbjeljivanje zubi', CAST(830 AS Decimal(18, 0)), 60)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (8, N'Implatant', N'Implatant', CAST(5100 AS Decimal(18, 0)), 120)
INSERT [dbo].[Zahvat] ([ZahvatId], [Sifra], [Naziv], [Cijena], [Trajanje]) VALUES (11, N'IA', N'Izrada aparata za zube', CAST(4500 AS Decimal(18, 0)), 120)
SET IDENTITY_INSERT [dbo].[Zahvat] OFF
ALTER TABLE [dbo].[Rezervacija] ADD  CONSTRAINT [DF_Rezervacija_RezervacijaPotvrda]  DEFAULT ((0)) FOR [RezervacijaPotvrda]
GO
ALTER TABLE [dbo].[Rezervacija]  WITH CHECK ADD  CONSTRAINT [FK_Rezervacija_Pacijent] FOREIGN KEY([PacijentID])
REFERENCES [dbo].[Pacijent] ([PacijentID])
GO
ALTER TABLE [dbo].[Rezervacija] CHECK CONSTRAINT [FK_Rezervacija_Pacijent]
GO
ALTER TABLE [dbo].[RezervacijaZahvat]  WITH CHECK ADD  CONSTRAINT [FK_RezervacijaZahvat_Rezervacija] FOREIGN KEY([RezervacijaID])
REFERENCES [dbo].[Rezervacija] ([RezervacijaID])
GO
ALTER TABLE [dbo].[RezervacijaZahvat] CHECK CONSTRAINT [FK_RezervacijaZahvat_Rezervacija]
GO
ALTER TABLE [dbo].[RezervacijaZahvat]  WITH CHECK ADD  CONSTRAINT [FK_RezervacijaZahvat_Zahvat] FOREIGN KEY([ZahvatID])
REFERENCES [dbo].[Zahvat] ([ZahvatId])
GO
ALTER TABLE [dbo].[RezervacijaZahvat] CHECK CONSTRAINT [FK_RezervacijaZahvat_Zahvat]
GO
USE [master]
GO
ALTER DATABASE [ordinacija] SET  READ_WRITE 
GO
