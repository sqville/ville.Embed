/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherFog",
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

   var pathdregular = "M6.5 15.02h7a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-.99h.09Zm-2-2h11c.27 0 .5.23.5.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .41-.49h.1Zm5.5-10c2.46 0 3.86 1.58 4.07 3.48h.06A2.82 2.82 0 0 1 17 9.26a2.82 2.82 0 0 1-2.87 2.76H5.87A2.82 2.82 0 0 1 3 9.26C3 7.8 4.2 6.6 5.7 6.5h.23c.2-1.91 1.6-3.48 4.07-3.48Zm0 1a3.04 3.04 0 0 0-3.09 3.03c0 .28-.25.5-.54.5h-.55c-1 0-1.82.77-1.82 1.73 0 .97.81 1.74 1.82 1.74h8.36c1 0 1.82-.77 1.82-1.74 0-.96-.81-1.73-1.82-1.73h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 10 4.02Z";
   var pathdfilled = "M6.5 15h7a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-1h.09Zm-2-2h11c.27 0 .5.22.5.5a.5.5 0 0 1-.41.5H4.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .41-.5h.1ZM10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 17 9.24 2.82 2.82 0 0 1 14.13 12H5.87A2.82 2.82 0 0 1 3 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3Z";
   
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