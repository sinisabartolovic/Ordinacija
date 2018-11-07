using AutoMapper;
using Ordinacija.DataAccess;
using Ordinacija.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace Ordinacija.App_Start
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Rezervacija, DisplayAllRezervacijaVM>()
                .ForMember(dest => dest.start, opt =>
                    {
                        opt.MapFrom(src => src.VrijemePocetka);
                    }
                )
                .ForMember(dest => dest.end, opt =>
                {
                    opt.MapFrom(src => src.VrijemeZavrsetka);
                }
                )
                .ForMember(dest => dest.title, opt =>
                {
                    opt.MapFrom(src => src.Napomena);
                }
                )
                .ForMember(dest => dest.id, opt =>
                {
                    opt.MapFrom(src => src.RezervacijaID);
                }
                )
            );
        }
    }
}