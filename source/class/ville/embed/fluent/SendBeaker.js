/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SendBeaker",
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

   var pathdregular = "M2.18 1.61a.5.5 0 0 1 .54-.06L17.5 10h-.01a.5.5 0 0 1-.21-.05l-14.01-7L4.88 9h6.62a.5.5 0 1 1 0 1H4.88l-1.61 6.06L12 11.69c.04.35.2.66.45.89l-9.74 4.87a.5.5 0 0 1-.7-.58L3.98 9.5 2.02 2.13a.5.5 0 0 1 .16-.52Zm.54-.06L17.51 10a.5.5 0 0 0 .21-.95l-15-7.5ZM17 14.4a2 2 0 0 0 .22.92l.35.68h-4.14l.35-.67a2 2 0 0 0 .22-.92V12h-.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1H17v2.4ZM12.9 17l-.8 1.54a1 1 0 0 0 .9 1.46H18a1 1 0 0 0 .89-1.46l-.8-1.54H12.9Z";
   var pathdfilled = "M2.72 1.55a.5.5 0 0 0-.7.58l1.5 5.62c.05.19.2.33.4.36l6.85 1.14c.28.05.28.45 0 .5l-6.85 1.14a.5.5 0 0 0-.4.36l-1.5 5.62a.5.5 0 0 0 .7.58l9.74-4.87A1.5 1.5 0 0 1 13.5 10h4.11l.11-.05a.5.5 0 0 0 0-.9l-15-7.5ZM17 14.4a2 2 0 0 0 .22.92l.35.68h-4.14l.35-.67a2 2 0 0 0 .22-.92V12h-.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1H17v2.4ZM12.9 17l-.8 1.54a1 1 0 0 0 .9 1.46H18a1 1 0 0 0 .89-1.46l-.8-1.54H12.9Z";
   
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