/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShieldQuestion",
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

   var pathdregular = "M9.72 2.08a.5.5 0 0 1 .56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0 1 17 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 0 1-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.5 15.05 15.05 0 0 0 6.3-2.42ZM9.6 3.35A15.97 15.97 0 0 1 4 5.43V9.5c0 3.4 1.97 5.86 6 7.46 4.03-1.6 6-4.07 6-7.46V5.43a15.97 15.97 0 0 1-5.6-2.08L10 3.1l-.4.25Zm1.15 10.4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2-5.5a1.25 1.25 0 1 1 2.5 0c0 .46-.27.76-.73 1.22l-.03.03c-.42.42-.99.99-.99 1.9v.1a.5.5 0 0 0 1 0v-.1c0-.47.27-.77.73-1.22l.03-.04c.42-.41.99-.98.99-1.89a2.25 2.25 0 0 0-4.5 0 .5.5 0 0 0 1 0Z";
   var pathdfilled = "M9.72 2.08a.5.5 0 0 1 .56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0 1 17 5v4.5c0 3.9-2.3 6.73-6.82 8.47a.5.5 0 0 1-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.5 15.05 15.05 0 0 0 6.3-2.42Zm1.03 11.67a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-2-5.5a1.25 1.25 0 1 1 2.5 0c0 .46-.27.76-.73 1.22l-.03.03c-.42.42-.99.99-.99 1.9v.1a.5.5 0 0 0 1 0v-.1c0-.47.27-.77.73-1.22l.03-.04c.42-.41.99-.98.99-1.89a2.25 2.25 0 0 0-4.5 0 .5.5 0 0 0 1 0Z";
   
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