--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: library; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.library (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    year integer NOT NULL,
    status boolean
);


--
-- Name: library_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.library_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: library_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.library_id_seq OWNED BY public.library.id;


--
-- Name: library id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library ALTER COLUMN id SET DEFAULT nextval('public.library_id_seq'::regclass);


--
-- Data for Name: library; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.library (id, title, author, year, status) FROM stdin;
1	Engineering Mechanics Dynamics	BEDFORD FOWLER	2009	t
2	Superconductivity	 Dave Prochnow	1989	t
3	Differential Equations	Henry Edwards David Penney	2008	t
4	Fluid Mechanics	Dale Taulbee	2009	t
5	Multivarialble Calculus	James Stewart	2012	t
6	Thermodynamics	Yunus Cengel Micheal Boles Mehmet Kanoglu	2015	t
\.


--
-- Name: library_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.library_id_seq', 7, true);


--
-- Name: library library_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library
    ADD CONSTRAINT library_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

