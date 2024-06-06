/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherRainShowersNight",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M11 6c2.47 0 3.87 1.58 4.07 3.48h.06A2.82 2.82 0 0 1 18 12.25 2.82 2.82 0 0 1 15.13 15h-.7l-.01.03-1.5 2.7a.5.5 0 0 1-.9-.39l.03-.08L13.3 15h-1.85l-.01.03-1.49 2.7a.5.5 0 0 1-.91-.39l.03-.08L10.31 15H8.44l-1.5 2.74a.5.5 0 0 1-.6.23l-.07-.03a.5.5 0 0 1-.24-.6l.04-.08L7.3 15h-.42A2.82 2.82 0 0 1 4 12.25c0-1.47 1.2-2.68 2.7-2.76h.24C7.14 7.56 8.54 6 11 6Zm0 1a3.04 3.04 0 0 0-3.08 3.03c0 .28-.26.5-.55.5h-.55c-1 0-1.82.78-1.82 1.74S5.82 14 6.82 14h8.37c1 0 1.81-.78 1.81-1.74s-.8-1.74-1.81-1.74h-.55c-.3 0-.55-.22-.55-.5A3.02 3.02 0 0 0 11 7.01ZM5.85 2.02a4.24 4.24 0 0 1 3.87 3.14c-.38.08-.74.2-1.07.36A3.05 3.05 0 0 0 7 3.38c-.18-.1-.34-.17-.53-.24a5.87 5.87 0 0 1-.63 3.44 5 5 0 0 1-2.55 1.9 4.58 4.58 0 0 0 1.37.8c-.34.22-.64.5-.88.8l-.29-.14a4.24 4.24 0 0 1-1.37-1.27.63.63 0 0 1 .3-.95c1.38-.5 2.12-1.04 2.54-1.85.47-.89.55-1.82.24-3.08-.1-.41.23-.8.65-.78Z";
   var pathdfilled = "M11.02 6.02c2.46 0 3.86 1.57 4.06 3.47h.06a2.82 2.82 0 0 1 2.88 2.76 2.82 2.82 0 0 1-2.88 2.77h-.71l-.01.02-1.49 2.7a.5.5 0 0 1-.91-.39l.03-.08 1.24-2.25h-1.85l-.01.02-1.49 2.7a.5.5 0 0 1-.91-.39l.03-.08 1.24-2.25H8.43l-1.48 2.73a.5.5 0 0 1-.6.23l-.08-.03a.5.5 0 0 1-.24-.6l.04-.08 1.22-2.25h-.4a2.82 2.82 0 0 1-2.87-2.77c0-1.46 1.19-2.67 2.7-2.75h.23c.2-1.92 1.6-3.48 4.07-3.48Zm-5.16-4a4.24 4.24 0 0 1 3.87 3.14A4.56 4.56 0 0 0 6.26 8.3l-.06.22-.05.18-.16.03c-.9.19-1.67.68-2.2 1.37l-.29-.15a4.24 4.24 0 0 1-1.37-1.27.63.63 0 0 1 .3-.95c1.38-.5 2.12-1.05 2.54-1.85.47-.89.55-1.83.24-3.08-.1-.41.23-.8.65-.78Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});