/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlertSnooze",
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

   var pathdregular = "M5 11.5V8.05a5 5 0 0 1 6.36-4.87.5.5 0 1 0 .27-.96A6 6 0 0 0 4 8v3.4l-.92 2.22A1 1 0 0 0 4 15h3.5a2.5 2.5 0 0 0 5 0H16a1 1 0 0 0 .92-1.38L16 11.4V10a.5.5 0 0 0-1 0v1.5c0 .07.01.13.04.2L16 14H4l.96-2.3a.5.5 0 0 0 .04-.2ZM8.5 15h3a1.5 1.5 0 0 1-3 0ZM14 2h3.5c.38 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 0 1 .09 1H14a.5.5 0 0 1-.45-.71l.04-.08L16.54 3H14a.5.5 0 0 1-.09-1H14ZM9.5 6H12c.4 0 .62.43.43.75l-.04.07L10.57 9H12a.5.5 0 0 1 .1 1H9.5a.5.5 0 0 1-.43-.75l.05-.07L10.93 7H9.5a.5.5 0 0 1-.09-1h.1Z";
   var pathdfilled = "M10 2c.89 0 1.74.19 2.5.52A1.5 1.5 0 0 0 14 4h.63l-1.3 1.83A1.47 1.47 0 0 0 12 5H9.45l-.18.02h-.04a1.5 1.5 0 0 0-.33 2.86l-.58.69-.1.13-.01.04A1.5 1.5 0 0 0 9.5 11h2.54l.18-.02h.05a1.5 1.5 0 0 0 1.09-2.12c.19.09.4.14.64.14h2v2.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm2.45 14a2.5 2.5 0 0 1-4.9 0h4.9ZM14 2h3.5c.37 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 0 1 .09 1h-3.6a.5.5 0 0 1-.44-.71l.04-.08L16.54 3H14a.5.5 0 0 1-.1-1h.1ZM9.5 6H12c.4 0 .62.43.43.75l-.05.07L10.57 9H12a.5.5 0 0 1 .09 1h-2.6a.5.5 0 0 1-.42-.75l.04-.07L10.93 7H9.5a.5.5 0 0 1-.1-1h.1Z";
   
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